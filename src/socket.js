import { io } from "socket.io-client";
// const dotenv = require("dotenv");

// dotenv.config({
//   path: "@/.env.local",
// });

const isProd = process.env.NODE_ENV === 'production';
const URL = isProd ? "https://sketchers-server.onrender.com" : "http://localhost:5000";
console.log(isProd, URL);

export const socket = io(URL);