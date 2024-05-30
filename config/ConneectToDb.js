const mongoose = require("mongoose")
require('dotenv').config()


const connectToDb = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://coderbuddy01:${process.env.PASSWORD}@cluster0.dpplfgk.mongodb.net/`,{
            dbName: 'ProjectNotes',

        })
        console.log("Connected To Database")
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connectToDb