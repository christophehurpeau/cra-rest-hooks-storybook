import React from 'react';
import { RestProvider } from 'rest-hooks';
import './App.css';

export default function App() {
  return (
    <RestProvider>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
    </RestProvider>
  );
}
