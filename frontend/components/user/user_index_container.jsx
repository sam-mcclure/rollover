import { connect } from 'react-redux';
import PostIndex from '../post/post_index';
import { fetchUserPosts } from '../../actions/post_actions';
import { unfollowUser, followUser } from '../../actions/follow_actions';
import { openModal } from '../../actions/modal_actions';
import { likePost, unlikePost } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    type: "userPosts",
    loadingState: state.ui.loading,
    userId: ownProps.userId
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: (id, posts) => dispatch(fetchUserPosts(id, posts)),
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    followUser: (userId, followedUser) =>
      dispatch(followUser(userId, followedUser)),
    unfollowUser: (userId, followId) =>
      dispatch(unfollowUser(userId, followId)),
    likePost: (postId, userId) => dispatch(likePost(postId, userId)),
    unlikePost: (postId, likeId) => dispatch(unlikePost(postId, likeId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(msp, mdp)(PostIndex);
