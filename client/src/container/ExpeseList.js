import React from 'react'
import Expense from '../components/Expense';
import HOCLOader from './HOCLoader';

const ExpenseList = ({expenses, removeExpense}) => {
    console.log(expenses);
    const expensesList = expenses.map(e=>
    {
        console.log(e._id);
        return <Expense id={e._id} remove={removeExpense} key={e._id} category={e.category}/>
    });
  return (
    <div>
      {expensesList}
    </div>
  )
}

export default HOCLOader('expenses')(ExpenseList);