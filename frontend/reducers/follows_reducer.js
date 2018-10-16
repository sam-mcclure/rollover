import { combineReducers } from 'redux';
import recommendedFollowsReducer from './recommended_follows_reducer';

const followsReducer = combineReducers({
  recommendedFollows: recommendedFollowsReducer
});

export default followsReducer;
