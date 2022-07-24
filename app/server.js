const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3003" },
});

server.listen(9991, () => {
  console.log("SERVER");
});

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

app.post("/rooms", (req, res) => {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
  //   res.json(...rooms.keys());
  console.log("room ");
});

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN ", (data) => {
    console.log(data);
  });
  console.log("socket connected", socket.id);
});
