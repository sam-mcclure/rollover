class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show

    @posts = Post.where('author_id = ?', params[:id])
    render 'api/posts/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
