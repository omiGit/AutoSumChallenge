import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as actions from './store/actions/expenses';
import Form from './components/Form';
import ExpenseList from './container/ExpeseList';

class App extends Component {
  componentDidMount(){
    this.props.fetchExpenses();
  }
  render() {
    const expenseList = !this.props.expenses.length?'Add Category':<ExpenseList 
    expenses = {this.props.expenses}
    removeExpense = {this.props.removeExpense}
    getCategory = {this.props.getCategory}
    />
    return (
      <div className="App">
        <Form onSubmit={this.props.postExpense} 
        categories={this.props.expenses.map(e=>e.category)}
        loading={this.props.loader}
        updateValues = {this.props.updateValues}
        clearCategory = {this.props.clearCategory}
        updateExpense = {this.props.updateExpense}
        />
        {expenseList}
      </div>
    );
  }
}

export default connect(({loader,expenses,updateValues})=>({loader,expenses,updateValues}),actions)(App);
