import { connect } from 'react-redux';
import Navbar from './navbar';
import { clearPosts } from '../../actions/post_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    clearPosts: () => dispatch(clearPosts())
  };
};

export default connect(msp, mdp)(Navbar);
