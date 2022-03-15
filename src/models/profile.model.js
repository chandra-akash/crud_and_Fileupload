const mongoose=require('mongoose')

const profileSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String}
  },
      { timestamps: true }
  );
  
  const Profile = mongoose.model("profile", profileSchema);
  module.exports = Profile;