class Api::V1::MembersController < ApplicationController

  def show
    render json: { message: "If you see this, you're in!" }
  end

  def index
    @users = User.all.order(created_at: :desc)
    render json: @users
  end 

end
