const express = require('express');
const app = express();

const PORT = 3000

const dotenv = require('dotenv');
dotenv.config();

app.get("/",(req,res)=>{
    console.log("inside get req", process.env.NODE_VERSION,process.env.ACCESSKEY);
    res.send("hello")
})

app.listen(PORT,  () =>{
    console.log(`server running on ${PORT}`);
});
