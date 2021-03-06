import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import {deleteArticle} from '../../AC/index';
import './article.css';


class Article extends Component {
  setContainerRef = (ref) => {
    this.container = ref;
  }

  setCommentRef = (ref) => {
    //console.log(findDOMNode(ref));
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;

    deleteArticle(article.id);

    console.log('article is deleted');
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;

    return (
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick = {this.handleDelete}>delete</button>
        <CSSTransitionGroup
          transitionName = 'article'
          transitionAppear = {true}
          transitionAppearTimeout = {500}
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}
          component = 'div'
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }

  getBody() {
    const {article, isOpen} = this.props;

    if (!isOpen) return null;
    
    return (
      <div>
        <p>{article.text}</p>
        <CommentList comments = {article.comments} ref = {this.setCommentRef} />
      </div>
    );
  }
}

Article.PropTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,

  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
};

export default connect(null, { deleteArticle })(Article);
