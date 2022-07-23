const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server, {
  transports: ["websocket", "polling", "flashsocket"],
});

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:9991",
//     credentials: true,
//   },
// });

// const io = require("socket.io")(server);

const cors = require("cors");
io.use(cors());

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

io.on("connection", function (client) {
  console.log("connected");
  client.emit("message", "Some thing to show");
});

// io.on("connection", (socket) => {
//   console.log("socket connected", socket.id);
// });

server.listen(9991, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("SERVER");
});
