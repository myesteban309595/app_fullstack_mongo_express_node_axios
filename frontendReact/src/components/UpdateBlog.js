import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:9000/task/'

const CompEditBlog = () => {

    const [title, setTitle] = useState('')    
    const [content, setContent] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    console.log("id de useParams:", id);
    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            tittle: title,
            content: content
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(`${URI}${id}`)
        setTitle(res.data.tittle)
        setContent(res.data.content)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Content</label>
                <textarea
                    value={content}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
            <button href="/" className="btn btn-primary"><i class="fa-solid fa-list"></i></button>
        </form>
    </div>
    )

}

export default CompEditBlog