import mongoose from 'mongoose'

const imagesModel = mongoose.Schema({
    urlFile: {
        type: String
    }
})

imagesModel.methods.setImgUrl = function setImgUrl(fileName) {
    this.urlFile = `http://localhost:9000/public/${fileName}` //~ ponemos la ruta public para luego mapearla y esconder la verdadera ruta de la iamgen
    console.log("filename recibido en models images:===>", fileName);
}

export default mongoose.model('images', imagesModel)