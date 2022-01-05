import React from "react";

const App: React.FC = (props) => {
  const [message, setMessage] = React.useState<string>();

  React.useEffect(() => {
    fetch("http://abc.com/message").then(async (res) => {
      const body = await res.json();
      setMessage(body.message);
    });
  }, []);

  return (
    <div>
      <img
        src="http://abc.com/image.jpg"
        width={50}
        height={50}
        alt="Red Circle"
        style={{ border: "1px solid green" }}
      />
      <p>Fetch message: {message}</p>
    </div>
  );
};

App.displayName = "App";

export { App };
