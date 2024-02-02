import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DisplayBox from './display';
import Login from './login';
import Regsiter from './register';
import Formfield from './from_field';
import Home from './home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter/>
  </>
);
function Counter(){
  const [count, setCount]=useState(0);
  const handleCount=() =>{
    setCount((prevCount)=>prevCount+1)  ;
  }
  
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleCount}>
        Click me
      </button>
    </div>
  );
  }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
