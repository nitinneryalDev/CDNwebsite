import { ApiResponse } from  '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'



// Here we are using this async to handle the database connection's directly here 
                               //  👇
const healthcheck = asyncHandler( async  ( req , res)  =>  {
    return res.status(200).json(new ApiResponse(200, "Ok" , "Health Checkup"))
} )

export {healthcheck}