import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Users from './components/UserList';


ReactDOM.render(
  <React.StrictMode>
    <Users/>   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

