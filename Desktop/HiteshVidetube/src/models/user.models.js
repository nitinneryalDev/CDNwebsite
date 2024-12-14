import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required:true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);


/// (Pre) hook means before saving 
userSchema.pre("save" , async function (next){

if(!this.isModified("password")) return next()
this.password = bcrypt.hash(this.password , 10 )
next()
}  )

 userSchema.methods.ispasswordCorrect =  async function(password) {
  return await bcrypt.compare(password , this.password)
 } 

 userSchema.methods.generateAccessToken = function() {
  // short lived access token
  return jwt.sing({ 
    _id:      this._id , 
    email:    this.email, 
    username: this.username , 
    fullname: this.fullname
}, ACCESS_TOKEN_SECRET , 
{ expiresIn:process.env.ACCESS_TOKEN_EXPIRY }
)  } 



userSchema.methods.generateRefreshToken = function() {
  // short lived access token
  return jwt.sing({ 
    _id:      this._id , 
}, REFRESH_TOKEN_SECRET , 
{ expiresIn:process.env.REFRESH_TOKEN_EXPIRY }
)  } 



export const User = mongoose.model("User", userSchema);
// In the database it converts the name ☝️ to the plural form and will be lowercase
