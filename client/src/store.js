import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import setAuthToken from './utils/setAuthToken';

import { userLoginReducer, issuesListReducer } from './containers/App/reducer'

const reducer = combineReducers({
  issuesList: issuesListReducer,
  userLogin: userLoginReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage, pageLoaded: false }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

let currentToken = store.getState().userLogin.userInfo?.token || null;

store.subscribe(() => {

    let previousToken = currentToken;
    currentToken = store.getState().userLogin.userInfo?.token || null;

    if(previousToken !== currentToken)
    {
        setAuthToken(currentToken);
    }

})

export default store;
