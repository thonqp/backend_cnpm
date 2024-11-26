import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: String,
    username: String,
    password: String,
    fullName: String,
    role: String
})

UserSchema.plugin(mongoosePaginate)

export default mongoose.model('users', UserSchema)
