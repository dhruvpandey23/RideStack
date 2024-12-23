import { Captain } from "../models/captain.model.js";
import bcrypt from 'bcrypt'
import  ApiError  from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import { BlacklistToken } from "../models/blacklistToken.model.js";
import { validationResult } from "express-validator";


const registerCaptain = async (req,res,next)=>{
    // get Rider details from frontend
    // validation - not empty
    // check if Rider already exists: username, email
    // create user object - create entry in db
    // send response to frontend
    const error =  validationResult(req);
    if(!error.isEmpty())
      return next(new ApiError(400,`Validation Failed`,error.array()));

    const {fullName,email,password,vehicle} = req.body;

    // check if user already exists
    const captain = await Captain.findOne({email});
    if(captain){
        // throw new ApiError(400,"User already exists"); 
        return res.status(400).json(new ApiError(400,"Captain already exists"));
    }

    // create user object
    const captainObj = await Captain.create({
        fullName:{
            firstName:fullName.firstName,
            lastName:fullName.lastName
        },
        email,
        password,
        vehicle:{
            color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
        }
        
    })

    // generate access token
    const token = captainObj.generateAccessToken();

    // send response to frontend
    return res.status(201).json(new ApiResponse(201,{token,captainObj},"Captain created successfully"));

    

}  

const loginCaptain = async (req,res,next)=>{
    // validate user details
    // check if user exists
    // check password
    // generate access token
    // send response to frontend

    const error =  validationResult(req);
    if(!error.isEmpty())
      return next(new ApiError(400,`Validation Failed`,error.array()));

    const {email,password} = req.body;
    const captain = await Captain.findOne({email}).select('+password');
    if(!captain){
        return res.status(400).json(new ApiError(401,"Invalid username or password"));
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(400).json(new ApiError(401,"Invalid username or password"));
    }
    const token = captain.generateAccessToken();
    // set token in cookie
    res.cookie('token',token,{httpOnly:true});
    // send response to frontend
    return res.status(200).json(new ApiResponse(200,{token,captain},"Captain logged in successfully"));
}
    

const getCaptainProfile = async (req,res,next)=>{
    // get user details from db
    // send response to frontend
    const captain = req.captain;
    return res.status(200).json(new ApiResponse(200,{captain},"Captain profile fetched successfully"));
}

const logoutCaptain = async (req,res,next)=>{
    res.clearCookie('token');
    // create blacklisted token
    const token = req.cookies?.token|| req.header("Authorization")?.replace("Bearer ", "");
    await BlacklistToken.create({token});
    return res.status(200).json(new ApiResponse(200,{},"Captain logged out successfully"));
}
export {registerCaptain , loginCaptain, getCaptainProfile, logoutCaptain};