import { START_LOADING } from '../actions/loading_actions';
import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_LOADING:
      return true;
    case RECEIVE_POST:
    case RECEIVE_ALL_POSTS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
