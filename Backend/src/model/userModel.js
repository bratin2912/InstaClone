const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    file_name:String,
    author:String,
    location:String,
    description:String,
    // date:{
    //     type:new Date(),
    //     default:true
    // }
});

const user=mongoose.model("user",userSchema);

module.exports=user;