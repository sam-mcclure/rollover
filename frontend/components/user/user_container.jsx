import UserShow from './user_show';
import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.userId
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(UserShow);
