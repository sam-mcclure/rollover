import { connect } from 'react-redux';
import RecommendedFollowsIndex from './recommended_follows_index';
import { followUser,
  fetchRecommendedFollows } from '../../actions/follow_actions';
import { fetchPosts } from '../../actions/post_actions';

const msp = state => {
  return {
    recommendedFollows: Object.values(
      state.entities.follows.recommendedFollows),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    followUser: (userId, followedUser) =>
      dispatch(followUser(userId, followedUser)),
    fetchRecommendedFollows: (userId) =>
      dispatch(fetchRecommendedFollows(userId)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(msp, mdp)(RecommendedFollowsIndex);
