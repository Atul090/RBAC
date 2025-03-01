const jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next) => {
    console.log("verify token ")
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    console.log(authHeader)
    if( authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        console.log(token)
        
    }
    if(!token){
        return res.status(401).json({message:"No token provided || Please provide auth token"})
    }
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        console.log("the decoded user :", req.user);
        next();
        // res.status(200).json({message: "verified user", data: req.user})
    } catch (er) {
        console.log(er);
        res.status(400).json({message:"Invalid token"})
    }

}

module.exports = {
    verifyToken
}