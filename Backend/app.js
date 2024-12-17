import dotenv from 'dotenv'
dotenv.config({
     path:'../.env'
});
import express from "express"
import cors from 'cors'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.get('/',(req,res)=>{
    res.send("hello world");
})

export {app}