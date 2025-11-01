import { model, Schema } from "mongoose";
import { type } from "os";


const directorySchema = new Schema({
    name: { type: String, required: true },
    userID : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    parentId: { type: Schema.Types.ObjectId, ref: 'Directory', default: null },
    type:{type:String,ref: 'Directory', default: 'folder' }

},{
    strict:'throw',
})


const Directory = model('Folder', directorySchema);
export default Directory;