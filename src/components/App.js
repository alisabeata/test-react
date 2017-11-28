import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleChart from './ArticleChart';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import store from '../store';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    const {articles} = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return(
      <Provider store = {store}>
        <div>
          <Counter /><br /><br />
          <UserForm /><br /><br />
          <Filters articles = {articles} /><br /><br />
          <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
          <ArticleChart articles = {articles} />
        </div>
      </Provider>
    );
  }
}

App.PropTypes = {
  articles: PropTypes.array
};

export default App;