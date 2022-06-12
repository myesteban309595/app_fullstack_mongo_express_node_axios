
import imagesModel from '../models/image.model.js'

   export const GetAllImages = async (req,res)=> {
    console.log("hola mundo");
   }
   
   export const postImage = async (req,res)=> {
      console.log("hola mundo");
   
   }
   
   export const UpdateImage = async(req,res)=> {
      console.log("hola mundo");
   
   }
   
   export const  DeleteImage = async(req,res)=> {
      console.log("hola mundo");
   }
   
   export const UploadImage = async (req, res) => {  //~ upload image
      const {file, body} = req
      
      if(file && body)
      {
        const newImage = new imagesModel({
           fileName: body.name,
           urlFile: `http://localhost:9000/task/${file.fileName}`
        })
   
        await newImage.newImage.save()
   
        res.json({
           newImage: newImage
        });
      }
   }
   
   export const GetImage =async (req, res) => {  //~ get images
       const images = await imagesModel.find()
       res.json(images)
   }
