const {User} = require('../model/userMode');

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
    try{
        const {username, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); //salt = 10
        
        const newUser= new User({username, password:hashedPassword, role});
        await newUser.save();
        res.status(200).json({messsage:"User Created"});
    } catch(err) {
        console.log(err)
        res.status(500).json({message:"Something went wrong"});
    }
};

const login = async (req,res) => {
    try{
        const {username,password} = req.body;
        const user= await User.findOne({username});
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"password is incorrect"});
        }

        //JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({ message:"Lgin successful", token })
    } catch(error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"});
    }
}

module.exports = {
    login,
    register
}