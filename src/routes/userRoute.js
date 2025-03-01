const express=require("express");
const {authorizeRoles} = require('../midlleware/roleMiddleware')
const {verifyToken} = require('../midlleware/authMiddleware');

const router = express();

router.get('/admin', verifyToken, authorizeRoles("admin"), async (req,res)=>{
    res.json({message:"welcome admin"})
})

router.get('/manager', authorizeRoles("admin","manager"), async (req,res)=>{
    res.json({message:"welcome manager"})
})

router.get('/user',authorizeRoles("admin","manager","user"), async (req,res)=>{
    res.json({message:"welcome user"})
})


module.exports = router;
