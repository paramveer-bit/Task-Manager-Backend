const  StickeyNote = require("../Models/StickeyModel")

const Insert = async (req,res) => {
    try{
        //Get data from request 
        const {note,description,color} = req.body

        //Making new note
        const stickeyNote = await StickeyNote.create({note,description,color}) 

        // Send response
        res.json({stickeyNote:stickeyNote})
    }
    catch(err){
        console.log(err)
        // res.sendStatus(401)
    }
}

const getAll = async(req,res) =>{

    const notes = await StickeyNote.find();

    res.json({notes:notes})
}

const deleteById = async (req,res) =>{
    // Getting id
    const _id = req.params.id
    //Deleting it
    await StickeyNote.deleteOne({_id})
    //Send status
    res.sendStatus(200)
}

const updateById = async (req,res) =>{
    // Getting id
    const _id = req.params.id
    //Getting data
    const {note,description,color} = req.body;
    //Upadte it
    await StickeyNote.findByIdAndUpdate(_id,{note,description,color})
    //Getting updated note
    const notes = await StickeyNote.findById({_id})
    //Sending response
    res.send({notes:notes})
}


module.exports = {Insert,getAll,deleteById,updateById}