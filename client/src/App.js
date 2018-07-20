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
    return (
      <div className="App">
        <Form onSubmit={this.props.postExpense}/>
        <ExpenseList expenses = {this.props.expenses}/>
      </div>
    );
  }
}

export default connect(({loader,expenses})=>({loader,expenses}),actions)(App);
