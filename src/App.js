import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-box">
          <h1>Calculator</h1>
          <div className="button-area">
            <div className="first-top-num-row">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>AC</button>
            </div>
            <div className="second-top-num-row">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>/</button>
            </div>
            <div className="third-top-num-row">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>x</button>
            </div>
            <div className="fourth-top-num-row">
              <button>0</button>
              <button>-</button>
              <button>+</button>
              <button>=</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
