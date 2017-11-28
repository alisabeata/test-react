import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {articles} from './fixtures';
import store from './store';

ReactDOM.render(
  <App articles = {articles} />, document.querySelector('.app')
);