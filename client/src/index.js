import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Cookie from 'js-cookie'
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';
import './generalStyle.css'
import './responsive.css'
import './sections.css'
import './buttons.css'
import './mixitup.css'

// const userInfo = Cookie.get('userInfo');
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f //------USE CHROME EXTENSION FOR REDUX------------------
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
