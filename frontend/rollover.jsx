import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';


//Testing
import { followUser, unfollowUser,
  } from './actions/follow_actions';
import {fetchRecommendedFollows} from './util/follow_api_util';
//Testing

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.fetchRecommendedFollows = fetchRecommendedFollows;
  window.followUser = followUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
