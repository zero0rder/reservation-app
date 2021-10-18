import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import Firebase, { FirebaseContext } from './components/Firebase';
import App from './App';
//import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
            <App/>
        </Provider>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);