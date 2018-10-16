import {
  RECEIVE_RECOMMENDED_FOLLOWS,
  RECEIVE_FOLLOW
} from '../actions/follow_actions';

const recommendedFollowsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECOMMENDED_FOLLOWS:
      return action.recommendedFollows;
    case RECEIVE_FOLLOW:
      let newState = Object.assign({}, state);
      delete(newState[action.follow.followedUserId]);
      return newState;
    default:
      return state;
  }
};

export default recommendedFollowsReducer;
