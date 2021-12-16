const express = require('express');
const app = express();

const PORT = 3000

const dotenv = require('dotenv');
dotenv.config();

app.get("/getAccess",(req,res)=>{
    console.log("inside get req",process.env, process.env.NODE_VERSION,process.env.YARN_VERSION);
    res.send("hello")
})

app.listen(PORT,  () =>{
    console.log(`server running on ${PORT}`);
});