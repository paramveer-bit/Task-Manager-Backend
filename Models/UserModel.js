const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email : {
        type : String,
        lowercase : true,
        require : true,
        unique : true,
        index : true,
    },
    password : {
        type : String,
        require : true,
        minlength : 8,
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User
