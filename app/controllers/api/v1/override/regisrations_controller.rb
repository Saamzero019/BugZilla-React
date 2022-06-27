class Api::V1::Override::RegisrationsController < ApplicationController
  respond_to :json

  def index   # just for test purposes
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create!(user_params)
    if @user
      session[:user_id] = @user.id
      session[:email] = @user.email
      render json: { status: :created,
        user: @user,message: "Successful Registeration" }
    else
      render json: @user.errors
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

end
