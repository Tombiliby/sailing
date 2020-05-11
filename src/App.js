import React from 'react';
import Checklist from "./components/checklist/checklist"
import SetColorScheme from "./style/setColorScheme"
import logo from './logo.svg';

function App() {
  return (

    <div className="App">

      <SetColorScheme />
      <Checklist />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
