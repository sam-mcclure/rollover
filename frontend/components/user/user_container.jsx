import UserShow from './user_show';
import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import { unfollowUser, followUser } from '../../actions/follow_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    followUser: (userId, followedUser) =>
      dispatch(followUser(userId, followedUser)),
    unfollowUser: (userId, followId) =>
      dispatch(unfollowUser(userId, followId)),
  };
};

export default connect(msp, mdp)(UserShow);
