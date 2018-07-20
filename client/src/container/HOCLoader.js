import React,{Component} from 'react';

import Loader from '../components/Loader';

export default propName=>WrappedComponent=> {
  return class LoaderHOC extends Component{
      isEmpty(prop){
        return (
          prop === undefined || 
          prop === null ||
          (prop.hasOwnProperty('length') && prop.length === 0) ||
          (prop.constructor === Object && Object.keys('length') === 0)
        )
      }
      render(){
          return (
          this.isEmpty(this.props[propName]) || this.props.loading?<Loader/>:<WrappedComponent {...this.props}/>
        );
      }
  }
  
}
