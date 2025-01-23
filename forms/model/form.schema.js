const mongoose = require('mongoose');


/* Schema for survay form  */

const surveySchema = new mongoose.Schema(
    {
      name:{
        type:String,
        required:true

      },
      dob:{
        type:String,
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
        type:String,
        required:true
    },
    

});

module.exports = mongoose.model('Form1',surveySchema)
   