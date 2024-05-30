const Note = require('../Models/NoteModel')


const getAll = async (req,res) =>{
    const notes = await Note.find();

    res.json({notes:notes})
}

const Insert =  async(req,res) =>{
    //Get all the data
    try{
        const {taskName,description,dateCreated,dueDate,completed,list,listColor} = req.body

        const note = await Note.create({taskName,description,dateCreated,dueDate,completed,list,listColor})

        res.json({note:note})
    }
    catch(err){
        res.sendStatus(401)
    }
}

const getById= async(req,res) =>{
    //Get id
    const id = req.params.id

    //Find Using id
    const note = await Note.findById(id)

    res.json({note:note})
}

const update = async(req,res) =>{
    try{
        //Get id
        const id = req.params.id

        //GetData
        const {taskName,description,dateCreated,dueDate,completed,list,listColor} = req.body

        // Upadte
        await Note.findByIdAndUpdate(id,{taskName,description,dateCreated,dueDate,completed,list,listColor});

        //Find Upated Note
        const note = await Note.findById(id)

        res.json({note:note})
    }
    catch(err){
        res.sendStatus(401)
    }


}

const deleteById = async(req,res) =>{
    //Getid 
    const id = req.params.id

    //Delete by id
    await Note.deleteOne({_id:id})

    //Send Status
    res.json({Success : "Deleted Succesfully"})
}

const getbylist = async(req,res) =>{
    // Getting list
    const list = req.params.list
    console.log(list)
    // Getting data
    const notes = await Note.find({list:list})
    // Sending response
    res.json({notes:notes}) 
}







module.exports = {getAll,Insert,getById,update,deleteById,getbylist}