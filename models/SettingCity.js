let mongoose=require('mongoose')
let country=new mongoose.Schema({
    cityName:{
        type:String,
    },
    stateName:{
        type:String,
    },

   
    status:{
        enum:["active","inactive"]
    }
})
module.exports=mongoose.model("SettingCity",city)