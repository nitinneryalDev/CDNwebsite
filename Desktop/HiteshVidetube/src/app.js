import express from "express"
import cors from "cors"

const app = express()

app.use( cors ({
    origin:process.env.CORS_ORIGIN , 
    credentials:true
}))


// COMMON MIDDLEWEAR

// To make our application more secure 
// json data is allowed to come in and the data is limit here 
app.use(express.json({limit:"16kb"}))

//  data is going to come in the different format like in the url bar space is  %20 
//  extended is a version of the urlencoded (extended:true) means all the latest properties that are available  
app.use(express.urlencoded({extended:true , limit:"16kb"}))


// the data we want to server locally any images and other stuff
app.use(express.static("public"))


/// IMPORT ROUTES
import healthcheckRouter from './routes/healthcheck.routes.js'
import userRouter from './routes/user.routes.js'
import { errorHandler } from "./middlewares/error.middlewares.js"

// ROUTES 
app.use("/api/v1/healthcheck" , healthcheckRouter)
app.use("/api/v1/users" , userRouter)


app.use(errorHandler)

export { app }