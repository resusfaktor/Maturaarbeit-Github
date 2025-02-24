const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1:27017/img")

connect.then(() =>{
    console.log("Database erfolgreich connectred")
}).catch(() =>{
    console.log("Database nicht connected");
})

const createSchema = new mongoose.Schema({
    creator:{
        type: String,
    },
    uuid:{
        type: String,
    },
    titel:{
        type: String,
    },
    biter:{
        type: String,
    },
    description:{
        type: String,
    },
    startbit:{
        type: Number,
    },
    img:{
        data: Buffer,
        contentType: String,
    
    }
});

const collection = new mongoose.model("create",createSchema);
module.exports = collection;