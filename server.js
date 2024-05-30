// Environment variables
require('dotenv').config()


//Imports
const express = require('express')
const cors = require('cors')
const connectToDb = require('./config/ConneectToDb')
const userController = require('./Controllers/userController')
const cookieParser = require('cookie-parser')
const checkAuth = require('./Middelware/requireAuth')
const noteController = require('./Controllers/NoteController')
const StickeyNoteController = require('./Controllers/StickeyNoteController')

//Server
const app = express()

//Connecting To Database
connectToDb()

//Middelware
app.use(express.json())
app.use(cors())
app.use(cookieParser())


// Routes
app.post('/singup',userController.singup)
app.post('/login',userController.login)
app.get('/logout',userController.logout)
app.get('/check',checkAuth,userController.check)


app.post('/notes',noteController.Insert)
app.get('/notes',noteController.getAll)
app.get('/notes/:id',noteController.getById)
app.put('/notes/:id',noteController.update)
app.delete('/notes/:id',noteController.deleteById)
app.get('/notes/lists/:list',noteController.getbylist)

app.post('/stickeynote',StickeyNoteController.Insert)
app.get('/stickeynote',StickeyNoteController.getAll)
app.delete('/stickeynote/:id',StickeyNoteController.deleteById)
app.put('/stickeynote/:id',StickeyNoteController.updateById)







app.get('/',(req,res)=>{
    res.json({"hi" : "he"})
})


// 
app.listen(process.env.PORT)



