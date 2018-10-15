import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost} from '../../actions/post_actions';
import { followUser, unfollowUser } from '../../util/follow_api_util';
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
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    followUser: (userId, followedUser) =>
    dispatch(followUser(userId, followedUser)),
    unfollowUser: (userId, followId) =>
    dispatch(unfollowUser(userId, followId))
  };
};

export default connect(msp, mdp)(PostIndex);
