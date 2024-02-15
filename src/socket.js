import { io } from "socket.io-client";
// const dotenv = require("dotenv");

// dotenv.config({
//   path: "@/.env.local",
// });

const isProd =
  process.env.NODE_ENV === "production"
    ? "https://sketchers-server.onrender.com"
    : "http://localhost:5000";
console.log(isProd, "isProd");

export const socket = io(isProd);
