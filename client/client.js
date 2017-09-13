import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
import TodoInput from '../components/TodoInput';
import configureStore from '../redux/store'
import { Provider } from 'react-redux';

// configure and create our store and pass store to app
// var store = createStore(reducers, initialState)

let initialState = {
  todos :[
    {
      id: 0,
      text: 'My first todo',
      completed: false
    }
  ]
}

let store = configureStore(initialState);

render (
  <Provider store={store}>
      <App />
  </Provider>,
  
  document.getElementById('app')
);
