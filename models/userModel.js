import { model, Schema } from "mongoose";

//summary: user model
const userSchema = new Schema({
    name: { type: String, required: true ,
        minlength:[3,'name should be at least 3 characters'],},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true ,minlength:[6,'password should be at least 6 characters'],},
    rootDirId: { type: Schema.Types.ObjectId, ref: 'Directory', required: true },

},{
    strict:'throw',
})


const User = model('User', userSchema);
export default User;