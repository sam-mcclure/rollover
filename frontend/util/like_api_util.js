export const likePost = (postId, userId) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/likes`
  });
};

export const unlikePost = (postId, likeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/likes/${likeId}`
  });
};
