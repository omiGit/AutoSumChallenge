const mongoose = require('mongoose');
const {Schema} = mongoose;
const {db} = require('../config/keys');
mongoose.connect(db.uri);
const expenseModel = new Schema({
    category:{type:String,required:true},
    paymentType:{type:String,required:true},
    date:{type:Number,required:true}
});
module.exports= mongoose.model('Expense',expenseModel);