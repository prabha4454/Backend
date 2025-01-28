const mongoose=require('mongoose');
mongoose.set('strictQuery',false);


const connectDb=async()=>{
   try{
    const conn=await mongoose.connect('mongodb+srv://hprabha72:traCeI1r26yKWPqY@cluster0.bafds.mongodb.net/Ecommes');
    console.log(`Database is connected: ${conn.connection.host}`);
   }
   catch(err){
    console.log(err)
   }
};

module.exports = connectDb;
