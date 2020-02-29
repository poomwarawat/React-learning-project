import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

function CalculateAge(state=0, action){
 switch(action.type){
     case "UPAGE" : return state + 1
     case "DOWNAGE" : return state - 1
     default : return state
 }
}

const store = createStore(CalculateAge)
store.subscribe(() => {
    console.log("Subscribe", store.getState())
})
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
