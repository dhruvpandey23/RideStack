import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const userSchema = new Schema( 
    {
        fullName :{
            firstName:{
                type:String,
                required:true,
                minlength:[3,"First name minimum length should be 3 character"]
            },
            lastName:{
                type:String,
                required:true,
                minlength:[3,"Last name minimum length should be 3 character"]
            }
        },
        email:{
           type:String,  
           required:true, 
           unique:true,
           minlength:[5,"Email minimum length should be 5 character"]
        },
        password:{
            type:String,
            required:true,
            minlength:[5,"Password minimum length should be 5 character"],
            select:false,
        },
        socketId:{
            type:String,
        }
    }
)

 // Pre is the middleware it is executed when we perform a specific task into database AND save is the parameter that is defined that when the data is going to be saved just before that just execute the pre Middle ware 
 userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10);
    
})

userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
             expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
export const User = mongoose.model('User',userSchema)
    
