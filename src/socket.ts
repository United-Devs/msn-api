require("dotenv").config();

import { Socket } from "socket.io";
const { Server } = require("socket.io");

const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN;

module.exports = {
  start: function (server: any) {
    const io = new Server(server, {
      cors: {
        origin: CLIENT_DOMAIN,
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket: Socket) => {
      console.log(`⚡: ${socket.id} user just connected!`);

      socket.on("addNewUser", (userName: string) => {
        io.emit("userAdded", userName);
      });
    });

    io.on("disconnect", (socket: Socket) => {
      console.log("🔥: A user disconnected");
    });

    return io;
  },
};
