const express = require('express');
const app = express();

const PORT = 3000

require("dotenv")

app.listen(PORT,  () =>{
    console.log("server running");
});