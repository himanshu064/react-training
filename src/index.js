import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from "./Task9/context/auth";
import {Provider} from 'react-redux';
import store from './Task9/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store} >
    <AuthProvider>
        <App />
    </AuthProvider>
      </Provider>
  </React.StrictMode>
);
