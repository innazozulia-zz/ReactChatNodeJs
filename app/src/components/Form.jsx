import React from "react";
import axios from "axios";
// import socket from "../socket";

function Form({ onLogin }) {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const enterRomm = async () => {
    if (!roomId || !userName) {
      return alert("Please, enter room id and your name");
    }
    // socket.emit();
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post("/rooms", obj);
    onLogin(obj);
    // console.log(roomId, userName);
  };
  return (
    <div className="wrapper__input">
      <div className="join__block">
        <input
          className="input__room"
          type="text"
          placeholder="Room id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          className="input__name"
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button disabled={isLoading} className="btn" onClick={enterRomm}>
          {isLoading ? "Enter" : "Entry"}
        </button>
      </div>
    </div>
  );
}

export default Form;
