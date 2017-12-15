import {normalizedComments as defaultComments} from '../fixtures';
import {DELETE_ARTICLE} from '../constants';

export default (commentsState = defaultComments, action) => {
  const {type, payload} = action;

  switch (type) {
    case DELETE_ARTICLE: return articleState.filter(article => article.id != payload.id);
  }

  return commentsState;
}