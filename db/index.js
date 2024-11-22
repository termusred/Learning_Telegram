import express from "express"
import Connector from "./connector/index.js"
import cors from "cors"
import user from "./routes/user.js"


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true // If you're dealing with cookies or sessions
}));

app.use(express.json())

Connector()

app.use(user)




app.listen(4444 , ()=>{
    console.log("Server is running at http://localhost:4444");
})