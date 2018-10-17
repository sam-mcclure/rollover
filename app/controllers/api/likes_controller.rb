class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    @like = Like.new()
    @like.user_id = current_user.id
    @like.post_id = params[:id]
    @like.save
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy!
  end
end
