import * as FollowAPIUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_RECOMMENDED_FOLLOWS = 'RECEIVE_RECOMMENDED_FOLLOWS';

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

const receiveRecommendedFollows = (recommendedFollows) => {
  return  {
    type: RECEIVE_RECOMMENDED_FOLLOWS,
    recommendedFollows
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

export const fetchRecommendedFollows = (userId, follow) => {
  return dispatch => {
    FollowAPIUtil.fetchRecommendedFollows(userId, follow)
      .then((recommendedFollows) =>
      dispatch(receiveRecommendedFollows(recommendedFollows)));
  };
};
