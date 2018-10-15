export const followUser = (userId, followedUser) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${userId}/follows`,
    data: { followedUser }
  });
};

export const unfollowUser = (userId, followId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/follows/${followId}`
  });
};
