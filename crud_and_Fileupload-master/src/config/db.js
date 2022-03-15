const mongoose = require("mongoose"); 
const connect = () => {
    console.log("Welcome to database");
     return mongoose.connect("mongodb://127.0.0.1:27017/cruddatabase",{
         useNewUrlParser:true,
         useUnifiedTopology:true
     })
};

module.exports = connect;