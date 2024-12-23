import { Router } from "express";
import { body } from "express-validator";
import { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } from "../controllers/captain.controller.js";
import { authCaptain } from "../middlewares/auth.middleware.js";


const router = Router()

router.post('/register',[
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:5}).withMessage('Password minimum length should be 5 character'),
    body('vehicle.color').isLength({min:3}).withMessage('color minimum length should be 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate minimum length should be 3 character'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')     

],registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:5}).withMessage('Password minimum length should be 5 character')
],loginCaptain)

router.get('/profile',authCaptain,getCaptainProfile) 
router.get('/logout',authCaptain,logoutCaptain)
 

export default  router;
