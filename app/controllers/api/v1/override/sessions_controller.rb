class Api::V1::Override::SessionsController < ApplicationController
  respond_to :json

  def create
    @user = User.find_by(email: session_params[:email])
    if @user #&& @user.authenticate(session_params[:password])
      session[:email] = session_params[:email]
      render json: { status: :created, logged_in: true, user: @user }
    else
      render json: {status: 401, errors: ["Invalid email or password"] }
    end
  end

  def destroy
    session.clear
    render json: {
             status: 200,
             logged_out: true
           }
  end

  def logged_in
    if @current_user
      render json: {
               logged_in: true,
               user: @current_user
             }
    else
      render json: {
               logged_in: false
             }
    end
  end

  def logout
    reset_session
    render json: { 
      status: 200, 
      logged_out: true 
    }
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
