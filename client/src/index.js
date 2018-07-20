import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store';
console.log(store.getState());
const AutoSumChallenge = ()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<AutoSumChallenge/>, document.getElementById('root'));
registerServiceWorker();
