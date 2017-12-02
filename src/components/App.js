import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import store from '../store';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return(
      <Provider store = {store}>
        <div>
          <Counter /><br /><br />
          <UserForm /><br /><br />
          <Filters /><br /><br />
          <ArticleList />
        </div>
      </Provider>
    );
  }
}

App.PropTypes = {
  articles: PropTypes.array
};


export default App;