import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
  CLEAR_POSTS
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_POSTS:
      return [];
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
      let newState = Object.assign({}, state);
      delete(newState[action.postId]);
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
