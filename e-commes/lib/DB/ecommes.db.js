const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://hprabha72:traCeI1r26yKWPqY@cluster0.bafds.mongodb.net/Ecommes', /* {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
            } */);
           /*  console.log(`MongoDB Connected: ${conn.connection.host}`);
            process.env.NODE_ENV === "production" ? console.log("Connected to production database") : consol
            .log("Connected to development database"); */
            return conn;
            } catch (err) {
                console.error(err);
              /*   process.exit(1); */
                }
                };
                module.exports = connectDB;
              
