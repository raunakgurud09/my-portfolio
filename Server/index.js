const User = require('./model_user');
const connectDB = require('./connect.js')

const express = require('express')
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(cors({origin:"*"}))
app.use(express.json())


app.post('/send',async (req,res)=>{
    
    try {
        const {name,email,message} = req.body;
        const user = await User.create({...req.body});
    
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message)
    }
})



const port = process.env.PORT  || 3001;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI); 
        app.listen(port,()=>{
            console.log(`server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();