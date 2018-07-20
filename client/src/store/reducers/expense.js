import * as actionType from '../const';
const initState = {
   expenses: [],
   loader:false,
   error:''
}

export default (state=initState,action)=>{

    switch(action.type){
        case actionType.SET_LOADER:
            return {...state,loader:true}

        case actionType.SET_EXPENSE:
            return {...state,expenses:[...state.expenses,...action.payload],loader:false}

        case actionType.SET_ERROR:
            return {...state,error:action.payload,loader:false}
        
        default:
        return initState
    }

    
}