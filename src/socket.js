import { io } from "socket.io-client";
const URL =
  process.env.NODE_ENV === "production"
    ? "https://sketchbook-server.onrender.com/"
    : "http://localhost:5005";
export const socket = io(URL);
