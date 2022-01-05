import React from "react";
import ReactDOM from "react-dom";
import { setupWorker } from "msw";
import { rest } from "msw";
import { App } from "./App";

function _base64ToArrayBuffer(base64: string) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

export const handlers = [
  rest.get("http://abc.com/image.jpg", async (req, res, ctx) => {
    var base64image =
      "iVBORw0KGgoAAAANSUhEUgAAAAUA AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO 9TXL0Y4OHwAAAABJRU5ErkJggg==";

    const buffer = _base64ToArrayBuffer(base64image);

    return res(
      ctx.set("Content-Length", buffer.byteLength.toString()),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(buffer)
    );
  }),

  rest.get("http://abc.com/message", async (req, res, ctx) => {
    return res(ctx.json({ message: "Message form MSW handler using fetch!" }));
  }),
];

export const worker = setupWorker(...handlers);

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
