import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux'; //Creates a Redux store that holds the complete state tree of your app
import { Provider } from 'react-redux'; //The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. Since any React component in a React Redux app can be connected, most applications will render a < Provider > at the top level, with the entire app’s component tree inside of it.


import rootReducers from './reducers/index.js';
import { addCharacterById } from './actions/index';

 const store = createStore(rootReducers);
 console.log('store.getstate()', store.getState());
 //subscribe is an event listener that fires when code is updated or state is manipulated
 store.subscribe(() => console.log('store', store.getState()));
 store.dispatch(addCharacterById(2)); //This fires off the action above, selecting character with id(or array index of) 2

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

