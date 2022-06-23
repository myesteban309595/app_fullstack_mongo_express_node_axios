import {mongoose} from 'mongoose'
import blogModels from '../models/blogmodel.js'
import usersModel from '../models/users.model.js';
import UserModel from '../models/users.model.js'

const database = 'fullstack_mongo_database'

const db = 
    (async () => {
    await mongoose.connect(`mongodb://localhost/${database}`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log("conectado a la base de datos:", database);
    })
    .catch((error)=> {
        console.log("error al conectar a la base de datos:",error);
    })

    const existenBlogs = await blogModels.find();

    if(existenBlogs.length === 0)
    {
        const model1 = new blogModels({
            tittle: "titulo 1 created default",
            content: " content 1 created default"
        }) 
        
        const model2 = new blogModels({
            tittle: "titulo 2 created default",
            content: " content 2 created default"
        }) 

        const model3 = new blogModels({
            tittle: "titulo 3 created default",
            content: " content 3 created default"
        }) 

        model1.save()
        model2.save()
        model3.save()

    }

    const existsUser = await usersModel.find();

    if(existsUser.length === 0){
        new UserModel({
            name:"marlon yoel",
            lastName: "esteban valencia",
            age: 26,
            phone: "3102345677",
            email: "maryoe_95@outlook.com",
            admin: true
         }).save()
    }

})();

export default db