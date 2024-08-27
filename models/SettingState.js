let mongoose=require('mongoose')
let country=new mongoose.Schema({
    stateName:{
        type:String,
    },
    countryName:{
        type:String,
    },

   
    status:{
        enum:["active","inactive"]
    }
})
module.exports=mongoose.model("SettingState",state)