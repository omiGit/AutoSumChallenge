import React from 'react'
import Expense from '../components/Expense';
import HOCLOader from './HOCLoader';

const ExpenseList = ({expenses}) => {
    const expensesList = expenses.map(e=><Expense category={e.category}/>);
  return (
    <div>
      {expensesList}
    </div>
  )
}

export default HOCLOader('expenses')(ExpenseList);