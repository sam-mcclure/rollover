class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:post_type, :body, :title)
  end


end
