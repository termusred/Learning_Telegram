import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { readFile } from "fs/promises";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", async (req, res) => {
    const file = await readFile("./menu/main.html", "utf8");
    res.setHeader("Content-Type", "text/html");
    res.send(file);
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on("message" , (msg)=>{
        socket.broadcast.emit("message", msg);
    })
});


httpServer.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
