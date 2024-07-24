import express from "express";  
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("<h1>Abdul Rahman</h1>")
})

app.get("/Services",(req,res)=>{
    res.send("<h1>Our Services</h1>")
})
app.listen(port, ()=>{
    console.log(`Server Running ${port}`);
});