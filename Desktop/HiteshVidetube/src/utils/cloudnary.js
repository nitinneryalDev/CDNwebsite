import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
import dotenv from "dotenv";


dotenv.config()

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudnary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
console.log(`File uploaded on cloudnary . File src: ${response.url}`)

//Once the file is uploaded , we would like to delete it from server 
fs.unlinkSync(localFilePath)
return  response 

  } catch (error) {
    fs.unlink(localFilePath);
    return null;
  }
}
const deleteFromCloudnary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId)
    console.log('Deleted from cloudnary . Public id' , publicId )
  } catch (error) {
    console.log('Error Deleting from Cloudinary' , error )
    
  }
}

export { uploadOnCloudnary , deleteFromCloudnary };
