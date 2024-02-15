import express from 'express'
import cors from 'cors'
import brypt from 'brypt'
import { config } from 'dotenv'
import friendsRouter from './router/friends.js';
import { checkUser } from './models/database.js';
config()


const app = express() //delcaring a web application as to be made 
app.use(cors())
app.use(express.json())

app.get('.friends', async (req, res) => {
    res,send(await getFriends())
})

app.get('/friends', (req, res) => {
    res.send({
        message: "Welcome to my shit"
    })
})

app.post('/login', (req, res) => {
    res.send(`hi, ${req.body.email} you have logged in`)
})

app.post('/user' , (req, res) => {

})

const auth = async (req,res,next) => {
    const {username , password} = req.body
    const hashedPassword = await checkUser()
    bcrypt.compare(password,hashedPassword, (err,result)=>
    if(err) throw err
    if(result === true){'
        res.send()
    }
    


// app.post('/users', (req, res) => {
//     const {username , password} = req.body
//     brypt.hash(password, 10, (err,hash) =>{
//         if (err) throw err
//         res.send({
//             hasedPassword:hash
//         })
//     })
// })

const PORT = process.env.PORT
//declaring the port number from .env file

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT)
})

app.post('/users' , (req, res)=>{
    res.send({
        msg: 'you have loggee in !!! yay!'
    })
})