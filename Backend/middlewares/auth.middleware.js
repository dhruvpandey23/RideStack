import { User } from "../models/user.model.js";
import { Captain } from "../models/captain.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import  ApiError  from "../utils/ApiError.js";
import { BlacklistToken } from "../models/blacklistToken.model.js";



const authUser = async(req,res,next)=>{
// get token from header or cookie
// check if token is valid
// check if user exists in db 
// if then set user in req
// if not throw error
    
const token = req.cookies?.token|| req.header("Authorization")?.replace("Bearer ", "");

if(!token){
    return res.status(401).json(new ApiError(401,"Unauthorized"));
}
const isBlacklisted = await BlacklistToken.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json(new ApiError(401,"Unauthorized"));
    }

try {
    const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded._id);
    
    if(!user){
        return res.status(401).json(new ApiError(401,"Unauthorized"));
    }
    req.user = user;
    next(); 
} catch (error) {
    return res.status(401).json(new ApiError(401, error?.message || "Invalid access token"));
}
}

const authCaptain = async(req,res,next)=>{   
  // get token from header or cookie
  // check if token is valid
  // check if Captain exists in db 
  // if then set Captain in req
  // if not throw error
  
  const token = req.cookies?.token|| req.header("Authorization")?.replace("Bearer ", "");
  
  if(!token){
      return res.status(401).json(new ApiError(401,"Unauthorized"));
  }
  const isBlacklisted = await BlacklistToken.findOne({ token: token });
  
      if (isBlacklisted) {
          return res.status(401).json(new ApiError(401,"Unauthorized"));
      }
  
  try {
      const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
      const captain = await Captain.findById(decoded._id);
      
      if(!captain){
          return res.status(401).json(new ApiError(401,"Unauthorized"));
      }
      req.captain = captain;
      next();
}
catch (error) {
    return res.status(401).json(new ApiError(401, error?.message || "Invalid access token"));
}
}

export { authUser , authCaptain}