const jwt = require("jsonwebtoken")
const blacklistModel = require("../model/blacklist.model")
async function authMiddleware (req ,res , next) {
   try {
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({
            message : "token is not provided!"
        })
    }
    const isTokenBlacklisted = await blacklistModel.findOne({token})
    if(isTokenBlacklisted){
        return res.status(401).json({
            message: "token is invalid"
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    }
    catch(err){
        console.log(err)
    }
    next()
}

module.exports = authMiddleware;