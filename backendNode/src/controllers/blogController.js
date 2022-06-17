
import blogModel from '../models/blogmodel.js'

export const GetAllBlog = async (req,res)=> {
    try { 
        const allblogs = await blogModel.find()
        res.status(200).json(allblogs)
       // console.log(allblogs);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const GetBlogId = async (req,res) => {
      try{
          const blogId = await blogModel.filter({_id:id})
          .then(blog => res.status(200).json(blog))
          console.log(blogId);
        }catch (error) {
          res.json({message: error.message})
       }
}

export const CreateBlog = async (req, res) => {

    try{
        const CreatedBlog = await blogModel.create(req.body)
        res.status(200).json({"message": "Se ha creado el registro correctamente"})
        console.log("registro creado: ", CreatedBlog);
    } catch(error) {
        res.json({message: error.message})
        console.log("error al crear el registro");
    }
}

export const UpdateBlog = async (req, res) => {

    try{
        const {id} = req.params
        const updateddBlog = await blogModel.updateOne({_id:id}, req.body)
        .then(()=>res.json({"message": "Se ha actualizado el registro correctamente"}))
        console.log("registro actualizado: ", updateddBlog);
    } catch(error) {
        res.json({message: error.message})
        console.log("error al actualizar el registro");
    }
}

export const DeleteBlog = async (req, res) => {

    try{
        const {id} = req.params
        const deleteddBlog = await blogModel.deleteOne({_id:id})
        .then(()=> res.json({"message": "Se ha eliminado el registro correctamente"}))
        console.log("registro eliminado: ", deleteddBlog);
    } catch(error) {
        res.json({message: error.message})
        console.log("error al eliminar el registro");
    }
}