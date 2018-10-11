import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

//Testing
import { fetchPosts, fetchPost, createPost,
  updatePost, deletePost} from './util/post_api_util';
//Testing

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
      store = configureStore();
  }

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPosts = fetchPosts;
  window.fetchPost = fetchPost;
  window.createPost = createPost;
  window.updatePost = updatePost;
  window.deletePost = deletePost;
  //testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
