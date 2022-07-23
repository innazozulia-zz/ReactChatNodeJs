import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:9991/rooms");

function App() {
  const connecteSocked = () => {
    // const socket = io();
    console.log("jdnzdjv");
  };

  return (
    <>
      <button onClick={connecteSocked}>BUTTON</button>
    </>
  );
}

export default App;
