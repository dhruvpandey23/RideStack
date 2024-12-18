import { Router } from "express";
import { body} from "express-validator";
import { registerUser } from "../controllers/user.controller.js";


const router = Router()  

router.post('/register',[
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:5}).withMessage('Password minimum length should be 5 character')
],registerUser)

export default router 