
import express from 'express'
import {GetAllBlog, GetBlogId,CreateBlog,UpdateBlog,DeleteBlog} from '../controllers/blogController.js'

const Broute = express.Router()

Broute.get('/', GetAllBlog)
Broute.get('/:id',GetBlogId)
Broute.post('/',CreateBlog)
Broute.put('/:id',UpdateBlog)
Broute.delete('/:id',DeleteBlog)

export default Broute