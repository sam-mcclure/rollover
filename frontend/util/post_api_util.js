export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

export const fetchLikedPosts = (like) => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts',
    data: { like }
  });
};

export const fetchUserPosts = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts',
    data: { userId }
  });
};

export const fetchPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${postId}`
  });
};

export const createPost = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updatePost = (formData, postId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${postId}`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deletePost = postId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}`
  });
};
