import React from "react";
import reducer from "./reducer";
import socket from "./socket";

import Form from "./components/Form.jsx";

// import socket from "./socket";
// const socket = io.connect("http://localhost:9991");

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    // socket.emit();
  };

  window.socket = socket;

  console.log(state);
  return (
    <div className="wrapper">{!state.joined && <Form onLogin={onLogin} />}</div>
  );
}

export default App;
