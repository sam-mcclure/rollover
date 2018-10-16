import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import followsReducer from './follows_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  follows: followsReducer
});

export default entitiesReducer;
