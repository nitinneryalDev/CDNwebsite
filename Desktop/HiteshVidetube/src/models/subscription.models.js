import mongoose , { Schema } from "mongoose";

const subscriberSchema = Schema( {
   
subscriber: {
    type:Schema.Types.ObjectId , //One Who is SUBSCRIBING
    ref:"User"
}, 
channel: {
    type:Schema.Types.ObjectId , 
    ref:'User'
}}, 
{
    timestamps:true
} )

export const Subscriber = mongoose.model( "Subscriber" , subscriberSchema  )