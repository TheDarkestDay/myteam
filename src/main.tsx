import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';
import './index.css';

render(
  <BrowserRouter basename='/myteam'>
    <App />
  </BrowserRouter>, 
  document.getElementById('app')!
);
