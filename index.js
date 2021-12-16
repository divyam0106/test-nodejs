const express = require('express');
const app = express();

const PORT = 3000

require("dotenv")

app.get("/getAccess",(req,res)=>{
    console.log("inside get req",process.env.ACCESSKEY,process.env.ACCESSID);
    res.send("hello")
})

app.listen(PORT,  () =>{
    console.log("server running");
});