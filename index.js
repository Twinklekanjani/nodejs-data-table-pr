import bodyParser from "body-parser";
import express from "express";
import StudentRouter from "./routes/StudentRoutes.js";
import db from "./config/database.js"

const port = 8081;

const app = express();
app.use(bodyParser.urlencoded());

app.use('/',StudentRouter)

app.listen(port,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("server start:");
        console.log("https://localhost:"+port);
    }
})