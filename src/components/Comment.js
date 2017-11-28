import React from 'react';
import PropTypes from 'prop-types';

 function Comment({comment}) {
  return (
    <div>
      <strong>{comment.name}</strong><br />
      <p>{comment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;