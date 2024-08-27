let mongoose=require('mongoose')
let country=new mongoose.Schema({
    countyName:{
        type:String,
    },
    code:{
        type:String,
    },
    status:{
        enum:["active","inactive"]
    }
})
module.exports=mongoose.model("SettingCountry",country)