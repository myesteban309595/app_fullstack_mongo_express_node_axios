import mongoose from 'mongoose'

const UserModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model('users', UserModel)