let settingCountry=require('../models/SettingCountry')

let createCountry=async(req,res)=>{
    let {cityName,stateName,status}=req.body;
    try {
        let AddCountry=await settingCountry.create({
            cityName:cityName,
            stateName:stateName,
            status:status
        })
        return res.status(200).json({success:true,message:"Created Country Successfully"})
    } catch (error) {
        return res.status(400).json({success:trfalseue,error:error.message})
        
    }
}

// ------------------------------------DeleteCountry------------------------

let deleteCountry=async(req,res)=>{
    let _id=req.params._id;
    try {
        let delete=await settingCountry.findByIdAndDelete({_id:_id})
     if(delete){
        return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})

     }

    } catch (error) {
        
    }
}




let GetAllCountry=async(req,res)=>{
    
    try {
        let findall=await settingCountry.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}