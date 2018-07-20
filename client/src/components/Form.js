import React, { Component } from 'react'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.categoryRef = React.createRef();
  }
  state={
    category:'',
    paymentType:'',
    date: moment()
  }
  getCategory=e=>this.setState({category:e.target.value})

  chooseCategory=e=>{
    const category = (e.target.value !== 'select' && e.target.value)||''
    this.setState({category});
  };

  getType = e=>this.setState({paymentType:e.target.value})

  getDate = date=>this.setState({date});

  onSubmit = e=>{
    e.preventDefault();
    this.props.onSubmit({...this.state,date:this.state.date.valueOf()});
    this.categoryRef.current.focus();
  }

  render() {
    console.log(this.state);
    const categories = this.props.categories.map((c,i)=><option key={c+i} value={c}>{c}</option>);
    return (
      <div>
        <form name="expenseForm" onSubmit={this.onSubmit}>
        <input type = 'text' name='category'
         value={this.state.category}
         onChange={this.getCategory}
         ref={this.categoryRef}
         required/>

        <select onChange={this.chooseCategory}>
            <option value='select'>select</option>
            {categories}
        </select> 

        <input type='radio' name='paymentType' 
        value='credit'
        onClick={this.getType}
        required
        /> Credit Card 
        <input type='radio' name='paymentType' 
        value='cash' 
        onClick={this.getType}/> Cash

        <DatePicker
        selected={this.state.date}
        onChange={this.getDate}
        />
        <button disabled={this.props.loading}>Submit</button>
        </form>

       
      </div>
    )
  }
}
