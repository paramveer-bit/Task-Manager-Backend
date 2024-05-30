const { maxLength } = require('cookieparser');
const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    taskName :{
        type : String,
        required : true,

    },
    description:{
        type : String,
        default : "",

    },
    dateCreated:{
        type : Date,
        default: Date.now,

    },
    completed :{
        type : Boolean,
        default : false,

    },
    dueDate :{
        type : Date,

    },
    list:{
        type : String,
        default : ""
    },
    listColor :{
        type : String,
    },

})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note