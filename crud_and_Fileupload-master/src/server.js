const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());
//Connect function>>
// const userController=require("./controller/user.controller")
   const userController = require("./controller/user.controller")
  //app.use("/user",userController)
  const profileController = require("./controller/profile.Controller")
  app.use("/imag",profileController)
  app.use("/",userController)
const start = async () => {
    await connect();

    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}

module.exports = start;