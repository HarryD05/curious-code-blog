import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Context
import ViewProvider from './context/ViewContext';

ReactDOM.render(<ViewProvider><App /></ViewProvider>, document.getElementById('root'));
