import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import  ApiError  from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";
import mongoose from "mongoose";


const registerUser = async (req,res,next)=>{
     // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
  const error =  validationResult(req);
  if(!error.isEmpty()){
    return next(new ApiError(400,`Validation Failed`,error.array()))
  }
    const {fullName,email,password} = req.body;

    // check if user already exists
    const user = await User.findOne({email})
    if(user){
        // throw new ApiError(400,"User already exists");
        return res.status(400).json(new ApiError(400,"User already exists"));
    }
    // create user object
    const userObj = await User.create({
        fullName:{
           firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
       password
    })
    
    if(!userObj){
        // throw new ApiError(400,"User creation failed")
        return res.status(400).json(new ApiError(400,"User creation failed"));
    }
    const token = userObj.generateAccessToken();
    return res.status(201).json(new ApiResponse(201,{token,userObj},"User created successfully"))
}


export {registerUser}