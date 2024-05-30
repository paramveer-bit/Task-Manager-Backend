const mongoose = require('mongoose');


const stickeySchema = new mongoose.Schema({
    note :{
        type : String,
        required : true,
    },
    description:{
        type : String,
        default : "",
    },
    color :{
        type : "String",
        default : "#15ff0055"
    }

})

const StickeyNote = mongoose.model('StickeyNote', stickeySchema);

module.exports = StickeyNote