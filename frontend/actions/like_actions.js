import * as LikeAPIUtil from '../util/like_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const removeLike = (likeId) => {
  return {
    type: REMOVE_LIKE,
    likeId
  };
};

export const likePost = (postId, userId) => {
  return dispatch => {
    return LikeAPIUtil.likePost(postId, userId)
      .then((like) => dispatch(receiveLike(like)));
  };
};

export const unlikePost = (postId, likeId) => {
  return dispatch => {
    return LikeAPIUtil.unlikePost(postId, likeId)
      .then(() => dispatch(removeLike(likeId)));
  };
};
