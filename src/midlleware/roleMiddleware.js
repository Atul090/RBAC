
const authorizeRoles = (...allowedRoles) => {
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"No access"});
        }
        next();
    }
}

module.exports = {
    authorizeRoles
}