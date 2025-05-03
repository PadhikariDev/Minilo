
import mongoose from "mongoose";

const urlScheme =new mongoose.Schema ({
    shortId:{
        type :String,
        required: true,
        unique : true,
    },redirectUrl:{
        type :String,
        required: true,
    },visitHistory:[{
        timestamp :{type:Number},
        
    }],clicks: {
        type: Number,
        default: 0,
      },

},
{timestamps:true});


const URL = mongoose.model('url',urlScheme);

export default URL