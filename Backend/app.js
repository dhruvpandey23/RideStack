import dotenv from 'dotenv'
dotenv.config({
     path:'../.env'
});
import express from "express"
import cors from 'cors'
import userRoute from "./routes/user.route.js"
import captainRoute from "./routes/captain.route.js"
import cookieParser from 'cookie-parser'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.use('/api/v1/user',userRoute)
app.use('/api/v1/captain',captainRoute)
export {app}