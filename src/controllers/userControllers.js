import User from "../models/userModels.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users were found" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUserController = async (req, res) => {
  try {
    const { fullName, email, age } = req.body;
    const newUser = await User.create({
      fullName: fullName,
      email: email,
      age: age,
    });
    if(!newUser){
        return res.status(403).json({message:"The user was not created"})
    }

    res.status(201).json("User created successfully")
  } catch (error) {
    console.error("Error creating users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserController=async(req,res)=>{
    try {
        const {fullName,age}=req.body;
        const {id}=req.params
        const existingUser=await User.findOne({
            where:{
                id:id
            }
        })
        if(!existingUser){
            return res.status(404).json({message:"The user is not found"})
        }
        const updatedUser=await User.update({
            fullName: fullName,
            age: age
        },{
            where:{
                id:id
            }
        })
        if(!updatedUser){
            return res.json({message:"The user was not updated"})
        }
        res.status(201).json({message:"User updated successfully"})

    } catch (error) {
        console.error("Error updating a user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const updateEmployedStatusController=async(req,res)=>{
    try {
        const {id}=req.params;
        const checkExistingUser=await User.findOne({
            where:{
                id:id
            }
        })
        if(!checkExistingUser){
            return res.status(404).json({message:"User not found"})
        }
        const updatedEmployedUserStatus=await User.update({
            employed:true
        },
    {
        where:{
            id:id
        } && {
            employed:false
        }
    })
    if(!updatedEmployedUserStatus){
        return res.json({message:"The user was not updated"})
    }
    res.status(201).json({message:"User employed status updated successfully"})
    } catch (error) {
        console.error("Error updating the employeed status:", error);
        return res.status(500).json({ error: "Internal Server Error" }); 
    }
}

export const getSingleUsetController=async(req,res)=>{
    try {
        const {id}=req.params;
        const oneUser=await User.findOne({
            where:{
                id:id
            }
        })
        if(!oneUser){
            return res.status(404).json("The user is not found")
        }
        res.status(200).json(oneUser)
    } catch (error) {
    console.error("Error fetching single user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const removeUserController=async(req,res)=>{
    try {
        const {id}=req.params;
        const existingUser=await User.findOne({
            where:{
                id:id
            }
        })
        if(!existingUser){
            return res.status(404).json("The user is not found")
        }
        await User.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"User was removed succesfully"})
    } catch (error) {
    console.error("Error deleting users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
    }
}