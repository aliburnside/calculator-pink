import React from 'react';
import {
  numberValue,
  add,
  minus,
  times,
  divide,
  equal,
  clear,
} from './buttonFunctions';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-box">
          <h1>Calculator</h1>
          <div className="result-area"></div>
          <div className="button-area">
            <div className="first-top-num-row">
              <button name="7" onClick={numberValue}>
                7
              </button>
              <button name="8" onClick={numberValue}>
                8
              </button>
              <button name="9" onClick={numberValue}>
                9
              </button>
              <button name="clear" onClick={numberValue}>
                AC
              </button>
            </div>
            <div className="second-top-num-row">
              <button name="4" onClick={numberValue}>
                4
              </button>
              <button name="5" onClick={numberValue}>
                5
              </button>
              <button name="6" onClick={numberValue}>
                6
              </button>
              <button name="/" onClick={numberValue}>
                /
              </button>
            </div>
            <div className="third-top-num-row">
              <button name="1" onClick={numberValue}>
                1
              </button>
              <button name="2" onClick={numberValue}>
                2
              </button>
              <button name="3" onClick={numberValue}>
                3
              </button>
              <button name="*" onClick={numberValue}>
                x
              </button>
            </div>
            <div className="fourth-top-num-row">
              <button name="0" onClick={numberValue}>
                0
              </button>
              <button name="-" onClick={numberValue}>
                -
              </button>
              <button name="+" onClick={numberValue}>
                +
              </button>
              <button name="===" onClick={numberValue}>
                =
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
