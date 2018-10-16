import { connect } from 'react-redux';
import RecommendedFollowsIndex from './recommended_follows_index';
import { followUser,
  unfollowUser,
  fetchRecommendedFollows } from '../../actions/follow_actions';

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
    unfollowUser: (userId, followId) =>
      dispatch(unfollowUser(userId, followId)),
    fetchRecommendedFollows: (userId, follow) =>
      dispatch(fetchRecommendedFollows(userId, follow))
  };
};

export default connect(msp, mdp)(RecommendedFollowsIndex);
