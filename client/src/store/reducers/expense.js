import * as actionType from '../const';
const initCategory= {
    _id:'',
    category:'',
    paymentType:'',
    date:''
}
const initState = {
   updateValues:initCategory,
   expenses: [],
   loader:false,
   error:''
}

export default (state=initState,action)=>{

    switch(action.type){
        case actionType.SET_LOADER:
            return {...state,loader:true}

        case actionType.SET_EXPENSES:{
            const expenses = Array.isArray(action.payload) ? action.payload:[action.payload];
            return {...state,expenses:[...state.expenses,...expenses],loader:false}
        }
        case actionType.SET_ERROR:
            return {...state,error:action.payload,loader:false}

        case actionType.REMOVE_EXPENSE:{
            const expenses = state.expenses.filter(e=>e._id !== action.payload);
            return {...state,expenses,loader:false}
        }
        case actionType.SET_UPDATEVALUES:{
            console.log({...state,updateValues:{...action.payload}});
            return {...state,updateValues:{...action.payload}}
        }
        case actionType.UPDATE_EXPENSE:{
            const expenses = state.expenses.map(e=>{
                if(e._id === action.payload._id){
                 e={...action.payload}   
                }return e});
            return {...state,expenses,loader:false}
        }
        case actionType.SET_CLEARCATEGORY:
            return {...state, updateValues:initCategory}
        
        default:
        return initState
    }

    
}