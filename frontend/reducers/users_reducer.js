import { RECEIVE_CURRENT_USER,
LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {[action.currentUser.id]: action.currentUser};
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state,
      {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
