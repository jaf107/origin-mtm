const express = require('express')
const app = express()
const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.send(`Backend works`);
})

app.listen(port,function(){
    console.log(`Server running on ${port}`);
})