import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article/index';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';

class ArticleList extends Component {
  render() {
    const {articles, openItemId, toggleOpenItem} = this.props;
    const ArticleElements = articles.map((article) => <li key={article.id}>
      <Article
        article = {article}
        isOpen = {article.id === openItemId}
        toggleOpen = {toggleOpenItem(article.id)}
      />
    </li>);

    return (
      <ul>
        {ArticleElements}
      </ul>
    );
  }
}

ArticleList.PropTypes = {
  // from connect
  articles: PropTypes.array.isRequired,
  // from accordion
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired,
};

export default connect(state => ({
  articles: state.articles
}))(accordion(ArticleList));