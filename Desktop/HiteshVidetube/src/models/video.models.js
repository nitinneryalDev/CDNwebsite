import mongoose , { Schema } from "mongoose";
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema( {
     videoFile: {
        type:String, // cloudnary url
        required:true 
     } , 
     thumbnail: {
        type:String, 
        required:true
     } , 
     title:{
        type:String, 
        required:true
     }, 
     description: {
        type:String , 
        required:true
     }, 
     views: {
        type:Number ,
        default:0
     } , 
     isPublished: {
        type:Boolean , 
        deafault:ture
     } , 
     owner: {
        type:Schema.Types.ObjectId , 
        ref:"User"
     }
} , { timestamps:true  }  )

// Injecting the plugin 
videoSchema.plugin(mongooseaggregatepaginate)

export const Video = mongoose.model("Video" , videoSchema)