// const { use } = require('moongose/routes');
const User = require('../Models/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const singup = async (req,res) =>{
    try{
        //Extract email and passowrd
        const email = req.body.email
        const password = req.body.password

        //Converting password to hash
        const hash = bcrypt.hashSync(password,8)

        //upload email and passowd
        const user = await User.create({
            email,password:hash
        })

        //Return response
        res.sendStatus(200)
    }
    catch(err){
        res.sendStatus(401)
        console.log(err)
    }
}

const login = async (req,res) =>{
    //Get email and passowd
    const {email,password} = req.body
    console.log(email)

    //Find User
    const user = await User.findOne({email:email})
    if(!user) return res.sendStatus(401);

    //Decrypt Password

    const match = bcrypt.compareSync(password,user.password)
    if(!match) return res.sendStatus(401);

    // Create token
    const exp = Date.now()+1000*60
    const token = jwt.sign({
        data : user._id,exp
    },process.env.SECRET)

    // Store jwt in cookie
    res.cookie("Authorization",token,{
        expire : new Date(exp),
        httpOnly : true,
        sameSite : "lax",
        secure : process.env.NODE_ENV === "production",
    })


    //Return Response
    res.sendStatus(200)

}

const logout = (req,res) =>{
    res.clearCookie("Authorization").sendStatus(200)
}

const check = (req,res) =>{
    console.log(req.user)
    res.sendStatus(200)
}

module.exports = {singup,login,logout,check}
