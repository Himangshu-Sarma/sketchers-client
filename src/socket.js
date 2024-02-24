import { io } from "socket.io-client";
const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://sketchbook-server.onrender.com/'
    : 'http://localhost:5000';
console.log(URL, process.env.NODE_ENV);
export const socket = io(URL);
