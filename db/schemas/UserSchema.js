import mongoose from "mongoose";

const ThisStuff = new mongoose.Schema({
    username : {
        type : mongoose.SchemaTypes.String,
        required : true
    },
    message : {
        type : mongoose.SchemaTypes.String,
        required : true
    },
})

export default mongoose.model('All', ThisStuff);

