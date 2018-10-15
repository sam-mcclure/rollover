import * as FollowAPIUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

const removeFollow = (followId) => {
  return {
    type: REMOVE_FOLLOW,
    followId
  };
};

export const followUser = (userId, followedUser) => {
  return dispatch => {
    return FollowAPIUtil.followUser(userId, followedUser)
      .then((follow) => dispatch(receiveFollow(follow)));
  };
};

export const unfollowUser = (userId, followId) => {
  return dispatch => {
    return FollowAPIUtil.followUser(userId, followId)
      .then(() => dispatch(removeFollow(followId)));
  };
};
