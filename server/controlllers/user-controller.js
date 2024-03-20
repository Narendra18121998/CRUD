import User from "../models/user-model.js";

export const addUser=async(req,res)=>{
    const user = req.body;
    //validtaing user through shcema
    const newUser = new User(user)
    try {
        if(newUser){
            await newUser.save()
            return res.status(200).json({newUser})
        }
    } 
    catch (error) {
        return res.status(404).json({message:error.message})    
    }
}

export const getUsers=async(req,res)=>{
    try {
      const users =   await User.find({})
      return res.status(200).json(users)
    } 
    catch (error) {
        return res.status(404).json({message:error.message})
    }
}

export const getUser=async(req,res)=>{
    // console.log(req.params.id)
    try {
      //const user =   await User.find({_id:req.params.id})
      const user = await User.findById(req.params.id)
      return res.status(200).json(user)
    } 
    catch (error) {
        return res.status(404).json({message:error.message})
    }
}


export const editUser=async(req,res)=>{
    const user = req.body;
    const editUser = new User(user)
    try {
       const updatedUser = await User.updateOne({_id:req.params.id} , editUser)
      return res.status(200).json(updatedUser)
    } 
    catch (error) {
        return res.status(404).json({message:error.message})
    }
}

export const deleteUser=async(req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id})
        return res.status(404).json({message:"user deleted successfully"})
    } 
    catch (error) {
        return res.status(404).json({message:error.message})
    }
}
