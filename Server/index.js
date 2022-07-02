const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors({origin:"*"}))
app.use(express.json())

app.post('/send',(req,res)=>{
    const response = req.body;
    console.log(response);

    res.status(200).json(response);
})



const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}...`)
})