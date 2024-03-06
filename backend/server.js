import express from 'express'
import cors from 'cors'
import brypt from 'brypt'
import infoRouter from '.routers/info.js'
import loginRouter from '.routers/login.js'
import cookieParser from './cookieParser'
import { config } from 'dotenv'
import friendsRouter from './router/friends.js';
import jwt from 'jsonwebtoken'
import { checkUser } from './models/database.js';
config()


const app = express() //delcaring a web application as to be made 
app.use(cors({
    origin: 'https://localhost:8080',
    credentials:true
}))


app.use(express.json())
app.use(cookieParser())
app.get('.friends', async (req, res) => {
    res,send(await getFriends())
})

app.post('/logi', (req, res) =>{
    const{username} = req.body
    const token = jwt.sign({username:username})
    process.env.SECRET_KEY
})

// NEED
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

//npm install cookie-parser

const PORT = process.env.PORT
//declaring the port number from .env file

// NEED
app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT)
})

app.post('/users' , (req, res)=>{
    res.send({
        msg: 'you have loggee in !!! yay!'
    })
})