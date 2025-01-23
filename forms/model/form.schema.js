const mongoose = require('mongoose');


/* Schema for survay form  */

const surveySchema = new mongoose.Schema(
    {
      name:{
        type:String,
        required:true

      },
      dob:{
        type:Number,
        required:true
      },
      gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    

});

module.exports = mongoose.model('Form1',surveySchema)
   