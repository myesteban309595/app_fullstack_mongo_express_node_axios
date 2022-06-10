import mongoose from 'mongoose'

const blogsModelSchema = mongoose.Schema({
    tittle: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: null
    },
    updateAt: {
        type: Date,
        default: null
    }
})

export default mongoose.model('blogs', blogsModelSchema)