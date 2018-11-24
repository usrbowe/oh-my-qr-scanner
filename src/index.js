import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hi
      </Button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
