const userModel = require("../model/user.model.js");
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const blacklistModel = require ("../model/blacklist.model.js")
const authMiddleware = require("../middleware/auth.middleware.js")

/** 
 * @name registerAuthController
 * @description registerAuthController
 * @access public
 */
async function registerAuthController(req, res) {
   try{ const {username, email, password} = req.body
    if(!username || !email || !password) {
        res.status(400).json({
            message : "please provide username , email , password"
        })
    }
    const isUserExists = await userModel.findOne({
        $or : [{username : username} , {email : email}]
    })

    if(isUserExists) {
        res.status(400).json({
            message : "this username or email already in use please type another!"
        })
    }

    const hashPassword = await bcrypt.hash(password , 10)
    const user = await userModel.create({
        username,
        email,
        password : hashPassword
    })

    const token = jsonwebtoken.sign(
        {id : user._id, username : user.username},
        process.env.JWT_SECRET,
        {expiresIn : "1d"}
    )

    res.cookie("token" , token)

    res.status(201).json({
        message : "user registered successfully!",
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }
    })}
    catch (err){
        console.log(err.message)
    }
}

/** 
 * @name loginAuthController
 * @description loginAuthController
 * @access public
 */
async function loginAuthController (req, res) {
  try { 
    const { email, password} = req.body
    const user = await userModel.findOne({ email })
    if(!user){
        return res.status(400).json({
            message : "please enter the valid email address."
        })
    }

    const isPasswordValid = await bcrypt.compare(password , user.password)
    if(!isPasswordValid){
        return res.status(400).json({
            message : "password or email is not valid "
        })
    }

    const token = await jsonwebtoken.sign(
        {id : user._id, email : user.email},
        process.env.JWT_SECRET,
        {expiresIn : "1d"},
    )

    res.cookie("token", token)

    res.status(200).json({
        message : "user loggedin successfully.",
        user : { 
            id : user._id,
            username : user.username ,
            email : user.email
        }
    })}
    catch (err){
        console.log(err)
    }
}

/**
 * @name logoutUserController
 * @description logout auth controller
 * @access Public
 */
async function logoutAuthController (req, res) {
    const token = req.cookies.token
    if(token) {
        await blacklistModel.create({token}) 
    }
    res.clearCookie("token")

    res.status(200).json({
        message : "user logout successfully!"
    })
}


async function getUserController (req, res) {
    const user = await userModel.findById(req.user.id)
     res.status(200).json({
        message: "User details fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}
module.exports = {
    registerAuthController,
    loginAuthController,
    logoutAuthController,
    getUserController
};