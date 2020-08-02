import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

window.onload = () => {
  if (localStorage.getItem('dark') !== undefined) {
    const darkMode = localStorage.getItem('dark');
    if (darkMode === 'false') {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('dark', 'false');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('dark', 'true');
    }
    return;
  }

  localStorage.setItem('dark', 'false');
  document.body.removeAttribute('data-theme');
}