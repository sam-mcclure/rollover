class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index

    if params[:like]
      liked_posts = current_user.liked_post_ids
      @posts = Post.where(:id => liked_posts)
    else
      followed_ids = current_user.followed_user_ids
      @posts = Post.where(author_id: current_user.id).or(Post.where(:author_id => followed_ids))
    end
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    @posts = Post.all
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:post_type, :body, :title,
       :photo, :video, :audio)
  end


end
