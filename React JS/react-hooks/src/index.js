import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import App2 from './components/App2';
import UseReducer from './components/UseReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App2 /> */}
    <UseReducer/>
  </React.StrictMode>
);
