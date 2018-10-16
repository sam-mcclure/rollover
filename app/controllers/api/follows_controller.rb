class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.new()
    @follow.user_id = current_user.id
    @follow.followed_user_id = params[:followedUser]

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end


  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy!
    render :show
  end

  def index

    if params[:follow][:recommended] = true
      @follows = current_user.unfollowed_users
      render :index
    else
      @follows = current_user.followed_users
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:recommended)
  end
end
