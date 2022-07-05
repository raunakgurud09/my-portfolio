const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors({origin:"*"}))
app.use(express.json())


// let users = [
//     {
//         name:"",
//         email:"",
//         message:"",
//     }
// ]

app.post('/send',(req,res)=>{
    const {name,email,message} = req.body;

    res.status(200).json({name,email,message});
})



const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}...`)
})