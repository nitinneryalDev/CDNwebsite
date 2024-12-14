import { Router } from "express"
import { registerUser , logoutUser, loginUser , refreshAccessToken, changeCurrentPassword, getCurrentUser, getUserChanelProfile, updateAccountDetails, updateUserCoverImage, updateAvatar, getWatchHistory } from "../controllers/user.controllers.js"
import {upload} from  "../middlewares/multer.middlewares.js"
import verifyJWT from "../middlewares/auth.middlewares.js"


const router = Router()

router.route("/register").post(upload.fields(
    [{name:"avatar", maxCount:1} , 
    {name:"coverImage", maxCount:1}]) ,
    registerUser);


router.route("/login").post(loginUser)


//  Secured Routes

router.route("/logout").post( verifyJWT , logoutUser)

router.route("/refresh-token").post( verifyJWT , refreshAccessToken)
router.route("/change-password").post( verifyJWT , changeCurrentPassword)
router.route("/current-user").get( verifyJWT , getCurrentUser)
router.route("/c/:username").get( verifyJWT , getUserChanelProfile)
router.route("/update-account").get( verifyJWT , updateAccountDetails)
router.route("/avtar").patch( verifyJWT , upload.single , updateAvatar)
router.route("/cover-image").patch( verifyJWT , upload.single , updateUserCoverImage)
router.route("/history").get( verifyJWT , getWatchHistory)


export default router