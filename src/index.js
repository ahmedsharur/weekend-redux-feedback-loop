import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux';

// const ReviewFeedbackReducer = (state = [], action) =>{
//     // set feedback review with data from server
//     if (action.type === 'SET_REVIEW_FEEDBACK'){
//         return action.payload;
//     }
//     //No change to data
//     return state;
// }

const feelingToAddReducer = (state = '', action )=> {
    if (action.type === 'SET_ADD_FEELING'){
        return  action.payload
    }
    //No change to data
    return state;
}

const understandingToAddReducer =(state = '', action) =>{
    if(action.type === 'SET_ADD_UNDERSTANDING'){
        return  action.payload
    }
    return state;
}

const supportToAddReducer = (state = '', action) =>{
    if (action.type === 'SET_ADD_SUPPORT'){
        return action.payload;
    }
    return state;
}

const commentsToAddReducer = (state = '', action) =>{
    if (action.type === 'SET_ADD_COMMENTS'){
        return action.payload
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingToAddReducer,
        understandingToAddReducer,
        supportToAddReducer,
        commentsToAddReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
