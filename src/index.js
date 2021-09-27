import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux';

// feeling reducer
const feelingToAddReducer = (state = '', action )=> {
    if (action.type === 'SET_ADD_FEELING'){
        return  action.payload
    }
    else if (action.type === 'SET_BACK_TO_FEELING'){
        return state;
    }
    //No change to data
    return state;
}

//understanding reducer
const understandingToAddReducer =(state = '', action) =>{
    if(action.type === 'SET_ADD_UNDERSTANDING'){
        return  action.payload
    }
    else if (action.type === 'SET_BACK_TO_FEELING'){
        return state;
    }
        //No change to data
    return state;
}

// support reducer
const supportToAddReducer = (state = '', action) =>{
    if (action.type === 'SET_ADD_SUPPORT'){
        return action.payload;
    }
    else if (action.type === 'SET_BACK_TO_FEELING'){
        return state;
    }
        //No change to data
    return state;
}

//comments reducer
const commentsToAddReducer = (state = '', action) =>{
    if (action.type === 'SET_ADD_COMMENTS'){
        return action.payload
    }
    else if (action.type === 'SET_BACK_TO_FEELING'){
        return state;
    }
        //No change to data
    return state;
}

const reviewToAddReducer = (state = '', action) =>{
    if (action.type === 'SET_REVIEW_FEEDBACK'){
        return action.payload
    }
    else if (action.type === 'SET_BACK_TO_FEELING'){
        return state;
    }
        //No change to data
    return state
}

// storing the reducers
const reduxStore = createStore(
    combineReducers({
        feelingToAddReducer,
        understandingToAddReducer,
        supportToAddReducer,
        commentsToAddReducer,
        reviewToAddReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
