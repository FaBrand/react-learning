import React from 'react';
import './App.css';
import Child from './Child.js';

function App() {
  return (
    <div className="App"> 
      <Child id="1" />
      <Child id="2" />
      <Child id="3" />
    </div>
  );
}

export default App;
