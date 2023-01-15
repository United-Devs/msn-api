require("dotenv").config();
import app from "./app";

const SERVER_PORT = process.env.SERVER_PORT;

const http = require("http");
const server = http.createServer(app);
const socket = require("./socket.ts");
socket.start(server);

server.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
