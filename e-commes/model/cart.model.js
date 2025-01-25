const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema ({

    pimg :{
        type: String,
        required: true
    },
    name:{
      type: String,
      required: true
    },
    /* description:{
        type:String,
    }, */
    price:{
        type:Number,
        required:true

     }
});

module.exports = mongoose.model('Cart', cartSchema);
