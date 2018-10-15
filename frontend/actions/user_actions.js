import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => {
  return dispatch => {
    return UserAPIUtil.fetchUsers()
      .then((users) => dispatch(receiveUsers(users)));
  };
};

export const fetchUser = (userId) => {
  return dispatch => {
    return UserAPIUtil.fetchUser(userId)
      .then((user) => dispatch(receiveUser(user)));
  };
};
