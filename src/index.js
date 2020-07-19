import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import RouterOutlet from './pages/RouterOutlet';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<RouterOutlet />, document.getElementById('root'));
registerServiceWorker();
