import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import {
	createStore
} from 'redux';
import {Provider} from 'react-redux'
import rootReducers from './reducers';



const store=createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#app')
);


