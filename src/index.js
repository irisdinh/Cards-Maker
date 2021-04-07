import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducer/styleReducer'
import "firebase/auth";

const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
