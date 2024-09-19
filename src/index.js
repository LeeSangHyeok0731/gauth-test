import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <h1>gauth-test용 입니다</h1>
      </div>
      <MyComponent />
    </BrowserRouter>
  </React.StrictMode>
);
