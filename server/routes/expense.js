const Expense = require('../../db/expense');
module.exports = app =>{
    app.post('/expenses',(req,res)=>{
        const expense = new Expense(req.body);
        expense.save()
        .then(expense=>res.send({expense}))
        .catch(error=>res.send({error:"Expense was not saved"}));
    });
    
    app.get('/expenses',(req,res)=>{
        Expense.find({}).then(expenses=>res.send({expenses}));   
    });
    //Expense.find({}).then(e=>res.send({expenses:e}));
    //res.send({done:true});
}