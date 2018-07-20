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

    app.delete('/expenses/:id',(req,res)=>{
        const {id} = req.params;
        console.log(id.toString());
        Expense.findByIdAndRemove(id)
        .then(e=>res.send({done:true}))
        .catch(e=>{console.log(e);res.send({error:'Expense was not deleted'});});
       
    });

    app.patch('/expenses',(req,res)=>{
        const {_id,...expense} = req.body;
        console.log(_id,expense);
        Expense.findOneAndUpdate({_id},expense,{new:true})
        .then(e=>res.send({done:true}))
        .catch(e=>res.send({error:'Expense was not updated'}))
       });
}