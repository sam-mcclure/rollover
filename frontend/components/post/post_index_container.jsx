import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost} from '../../actions/post_actions';
import { unfollowUser, followUser,
  fetchRecommendedFollows } from '../../actions/follow_actions';
import { openModal } from '../../actions/modal_actions';
import { likePost, unlikePost } from '../../actions/like_actions';

const msp = state => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    postKeyword: '',
    loadingState: state.ui.loading
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
      dispatch(unfollowUser(userId, followId)),
    fetchRecommendedFollows: (userId) =>
      dispatch(fetchRecommendedFollows(userId)),
    likePost: (postId, userId) => dispatch(likePost(postId, userId)),
    unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId))

  };
};

export default connect(msp, mdp)(PostIndex);
