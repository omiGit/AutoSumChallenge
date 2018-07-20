const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.post('/expenses',(req,res)=>{
    const expense = req.body;
    console.log(expense);
    res.send({done:true});
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
app.listen(5000,()=>console.log('Localhost connected: localhost:5000/ '));