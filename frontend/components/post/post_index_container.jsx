import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost} from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal, postId) => dispatch(openModal(modal, postId))
  };
};

export default connect(msp, mdp)(PostIndex);
