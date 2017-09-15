import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import RootReducer from './reducers/reducer'
import Main from './components/Main'
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
let store = createStore(RootReducer,
  applyMiddleware(thunk));
var root = document.getElementById('root');

store.subscribe(function () {
   console.log(store.getState())
});



//store.dispatch(addTask('my new task: going to shop', 'todo'));

render(
    <Provider store={store}>
        <Main/>
    </Provider>, root
)