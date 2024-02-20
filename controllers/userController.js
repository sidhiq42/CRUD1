import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

const authUser = {
    registerUser: async(req, res)=>{
        try {
            const { fullname, address, phone, photo, email, password } = req.body;
            const exuser = await userModel.findOne({ email });
            if (exuser) {
                return res.status(400).json({
                    message: "User already existed",
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await userModel.create({
                fullname,
                address,
                phone,
                photo,
                email,
                password: hashedPassword,
            });
            return res.status(201).json({
                message: "User Successfully Registered",
                user
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                error:error.message
            });
        }
    },

  loginUser: async(req,res)=>{
    try{
    const {email,password}=req.body
    const user=await userModel.findOne({email})
    if(!user){
      return res.status(400).json({
        message:"user not existed"
      })
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
      return res.status(400).json({
        message:"Password Does not Match ! "
      })
    }
    return res.status(200).json({
        message:"Logined Successfully",
      

    })
  }
  catch(error){
    return res.status(500).json({
        message:"Internal Server Error",
        error:error.message
    })
  }
  },
  viewAllUsers: async (req,res)=>{
    try{
      const allUsers=await userModel.find()
      if(!allUsers){
        res.status(404).josn({
          message:"User Not Found"
        })
      }
      res.status(200).json({
        message:"All users Are Here",
        allUsers
      })
    }catch(error){
      res.status(500).json({
        message:"Invalid Server Error"
      })
    }
  },
  viewEachUser:async(req,res)=>{
    const {id}=req.params
    try{
      const eachUser=await userModel.findById(id)
      if(!eachUser){
        res.status(404).json({
          message:"The User Not Found"
        })
      }
      res.status(200).json({
       eachUser
      })
    }catch(error){
      res.status(500).json({
        messgae:"Invalid Server Error"
      })
    }
  },
  editUser: async(req,res)=>{
    const {id}=req.params
    const userData=req.body
    try{
      const editUser=await userModel.findByIdAndUpdate(id,userData,{
        new:true
      })
      if(!editUser){
        res.status(404).json({
          message:"user Not Found"
        })
      }
    res.status(200).json({
      message:"User Data Updated Successfully",
      editUser
    })
    }catch(error){
      res.status(500).json({
        message:"Invalid Server Error"
      })
    }
  },
  deleteUser: async(req,res)=>{
    const {id}=req.params
    try{
      const deleteUser=await userModel.findByIdAndDelete(id)
      if(!deleteUser){
        res.status(404).json({
          message:"user not found"
        })
      }
      res.status(200).json({
        message:"user deleted successfully"
      })
    }catch(error){
      res.status(500).json({
        message:"Invealid Server Error"
      })
    }
  }
};

export default authUser;

