class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.new()
    @follow.user_id = current_user.id
    @follow.followed_user_id = params[:id]

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end


  def destroy
    @follow = current_user.followed_users.find(params[:id])
    @follow.destroy!
    render :show
  end
end
