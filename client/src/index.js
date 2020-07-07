import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import App from './components/App';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

 ReactDOM.render(
     <Provider store = {store}>
        <App />
    </Provider>,
     document.querySelector('#root')
 )

 console.log(process.env.REACT_APP_STRIPE_KEY);
 console.log(process.env.NODE_ENV);