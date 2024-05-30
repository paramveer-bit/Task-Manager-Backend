const jwt = require('jsonwebtoken')
const User = require('../Models/UserModel')

const checkAuth = async (req,res,next) => {
    try{
        //Get Jwt token
        const token = req.cookies.Authorization

        //Verify JWT token
        const decoded = jwt.verify(token,process.env.SECRET)
        //user
        const user = await User.findById(decoded.data)

        //Send result if invalid
        if(!user) res.sendStatus(401)

        //Attach to object
        req.user = user
        //Next
        next()
    }
    catch(err){
        res.sendStatus(401)
    }

}

module.exports = checkAuth