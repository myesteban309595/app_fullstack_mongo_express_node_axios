import mongoose from 'mongoose'

const imagesModel = mongoose.Schema({
    filename: {
        type: String
    },
    urlFile: {
        type: String
    },
    dateUpload: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('images', imagesModel)