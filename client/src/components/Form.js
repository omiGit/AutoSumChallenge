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
    date: moment(),
    id:'',
    udate:false
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
    if(this.state.update){
      this.props.updateExpense({...this.state,date:this.state.date.valueOf(),_id:this.state.id});
    }
    else{
      this.props.onSubmit({...this.state,date:this.state.date.valueOf()});
    }
    this.reset();
    this.categoryRef.current.focus();
  }

  reset=()=>{
    this.setState({category:'',
    paymentType:'',
    date: moment(),
    id:'',
    udate:false});
  }

  componentWillUpdate(nextProps,nextState){
    const {category,paymentType,date,_id} = nextProps.updateValues;
    if(category && paymentType && date ){
      this.setState({category,paymentType,date:moment(date),id:_id,update:true})
      this.props.clearCategory();
      this.categoryRef.current.focus();
    }
  
  }
  render() {
    const categories = this.props.categories.map((c,i)=><option key={c+i} value={c}>{c}</option>);
    return (
      <div>
        
        <form name="expenseForm" onSubmit={this.onSubmit}>
        <label> Category </label>
        <input type = 'text' name='category'
         value={this.state.category}
         onChange={this.getCategory}
         ref={this.categoryRef}
         tabIndex={1}
         autoFocus={true}
         required/>

        <select onChange={this.chooseCategory}>
            <option value='select'>select</option>
            {categories}
        </select> <br/>
        <label>Payment Type : </label>
        <input type='radio' name='paymentType' 
        value='credit'
        name="paymentMethod"
        onClick={this.getType}
        checked={this.state.paymentType === 'credit'?true:null}
        required
        /> Credit Card 
        <input style={{marginLeft:'15px'}} type='radio' name='paymentType' 
        value='cash'
        name="paymentMethod"
        checked={this.state.paymentType === 'cash'?true:null}
        onClick={this.getType}/> Cash
        <br/>
        <label>Select Date</label>
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
