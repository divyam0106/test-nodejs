const express = require('express');
const app = express();

const PORT = 3000

require("dotenv")

app.get("/getAccess",(req,res)=>{
    console.log(process.env.ACCESSKEY,process.env.ACCESSID);
})

app.listen(PORT,  () =>{
    console.log("server running");
});