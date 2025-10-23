import { model, Schema } from "mongoose";


const directorySchema = new Schema({
    name: { type: String, required: true },
    userID : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    parentId: { type: Schema.Types.ObjectId, ref: 'Directory', default: null },

},{
    strict:'throw',
})


const Directory = model('Folder', directorySchema);
export default Directory;