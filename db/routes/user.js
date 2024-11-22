import express from "express"
import All from "../schemas/UserSchema.js";
const router = express.Router();

router.get("/users" , async (req , res)=>{
    try {
        const data = await All.find()
        res.send(data)
    } catch (error) {
        console.log("error : " + error);
    }
})

router.post("/users" , async (req , res)=>{
    try {
        const {username , message} = req.body
        if(username != undefined || message != undefined){
            const data = new All(username , message)
            await data.save()
            res.send(data)
        } else {
            res.send("Invalid content")
        }
    } catch (error) {
        console.log("error : " + error);
    }
})
export default router