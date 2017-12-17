import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors/index';

function Comment({comment}) {
  return (
    <div>
      <strong>{comment.user}</strong><br />
      <p>{comment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  // from connect
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

const mapsStateToProps = () => {
  const commentSelector = commentSelectorFactory();

  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    }
  };
};

export default connect(mapsStateToProps)(Comment);