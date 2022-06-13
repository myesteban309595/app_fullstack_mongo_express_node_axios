import mongoose from 'mongoose'

const excelModelSchema = mongoose.Schema()

export default mongoose.model('excel_data', excelModelSchema)