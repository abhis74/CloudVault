import { extension } from "mime-types";
import { model, Schema } from "mongoose";


const fileSchema = new Schema({
    name: { type: String, required: true },
    extension : { type: String, required: true },
    userID : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    parentDirId: { type: Schema.Types.ObjectId, ref: '`Directory`', required: true },

},{
    strict:'throw',
})


const File = model('File', fileSchema);
export default File;