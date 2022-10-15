import React from 'react';
import logo from '../logo.svg';

export default function Header(props) {
  const message = 'hi';
  let count = 1;
  return (

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
        {props.title}
      </a>
    </header>

  );
}