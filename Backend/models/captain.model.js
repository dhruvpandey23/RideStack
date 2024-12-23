import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const captainSchema = new Schema(
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
        socketId: {
            type: String,
        },
        vehicle:{
            color:{
                type:String,
                required:true,
                minlength:[3,"Color minimum length should be 3 character"]
            },
            plate:{
                type:String,
                required:true,
                minlength:[3,"Plate minimum length should be 3 character"]
            },
            capacity :{
                type:Number,
                required:true,
                min: [ 1, 'Capacity must be at least 1' ],
            },
            vehicleType :{
                type:String,
                enum:['car','motorcycle','auto']
            },
        },
        location :{
            ltd: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        },
        status :{
            type:String,    
            required:true,
            minlength:[3,"Status minimum length should be 3 character"],
            enum:['active','inactive'],
            default:'inactive'
        },
        
    }
    )

    captainSchema.pre("save",async function (next) {
        if(!this.isModified("password")) return next();
    
        this.password = await bcrypt.hash(this.password,10);
        
    })
    
    captainSchema.methods.generateAccessToken = function(){
       return jwt.sign(
            {
                _id:this._id
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                 expiresIn:process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }
    
    
    captainSchema.methods.comparePassword = async function(password){
        return await bcrypt.compare(password,this.password)
    }

export const Captain = mongoose.model('Captain',captainSchema)