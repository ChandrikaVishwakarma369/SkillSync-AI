const { Router } = require("express");
const {registerAuthController, loginAuthController, logoutAuthController} = require("../controller/auth.controller.js")
const authRouter = Router()

/**
 * @route '/api/auth/register'
 * @description register route 
 * @access Public 
 */
authRouter.post("/register", registerAuthController )

/**
 * @route '/api/auth/login'
 * @description login route 
 * @access Public 
 */
authRouter.post("/login", loginAuthController)

/**
 * @route 'api/auth/logout'
 * @description remove token from the cookie and add to the blacklist 
 * @access Public
 */
authRouter.get("/logout", logoutAuthController)

module.exports= authRouter;