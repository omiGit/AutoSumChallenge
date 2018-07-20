const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

require('./server/routes/expense')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
 
app.listen(app.listen(process.env.PORT || 5000),()=>console.log('Localhost connected: localhost:5000/ '));