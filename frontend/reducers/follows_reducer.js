import { combineReducers } from 'redux';
import recommendedFollowsReducer from './recommended_follows_reducer';
import currentFollowsReducer from './current_follows_reducer';

const followsReducer = combineReducers({
  currentFollows: currentFollowsReducer,
  recommendedFollows: recommendedFollowsReducer
});

export default followsReducer;
