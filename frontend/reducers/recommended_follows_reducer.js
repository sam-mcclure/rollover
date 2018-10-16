import {RECEIVE_RECOMMENDED_FOLLOWS} from '../actions/follow_actions';

const recommendedFollowsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECOMMENDED_FOLLOWS:
      return action.recommendedFollows;
    default:
      return state;
  }
};

export default recommendedFollowsReducer;
