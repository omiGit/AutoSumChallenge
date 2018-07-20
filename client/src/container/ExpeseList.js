import React from 'react'
import Expense from '../components/Expense';
import HOCLOader from './HOCLoader';

const ExpenseList = ({expenses, removeExpense,getCategory}) => {
  
    const expensesList = expenses.map(e=>
    {
        return <Expense id={e._id} 
        remove={removeExpense} 
        key={e._id} 
        paymentType={e.paymentType}
        getCategory={getCategory}
        date={e.date}
        category={e.category}/>
    });
  return (
    <div>
      {expensesList}
    </div>
  )
}

export default HOCLOader('expenses')(ExpenseList);