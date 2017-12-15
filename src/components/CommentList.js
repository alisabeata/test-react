import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentAdd from './CommentForm/index';


function CommentList({comments = [], isOpen, toggleOpen}) {
  function getBody() {
    if (!isOpen) {
      return null;
    }

    if (!comments.length) {
      return <p>No comment yet</p>;
    }

    const CommentElements = comments.map((id) => <li key={id}><Comment id = {id} /></li>);

    return (
      <div>
        {CommentElements}
      </div>
    );
  }

  return (
    <div>
      <button onClick = {toggleOpen}>
        {isOpen ? 'close comments' : 'open comments'}
      </button>
      <ul>
        {getBody()}
      </ul>
      <CommentAdd />
    </div>
  );
}

export default toggleOpen(CommentList);