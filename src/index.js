import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';



// Redux store -> globalized store

// Action -> Increment

const increment = () => {
  return {
    type: 'INCREMENT',

  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// Reducer
const counter = (state = 0, action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}

let store = createStore(counter);

//Display it in the console
store.subscribe(() => console.log(store.getState()))

// Dispatch
store.dispatch(increment())

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
