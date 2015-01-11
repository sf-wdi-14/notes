class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user.authenticate(params[:password])
      session[:user_id] = user.id
    else
      flash[:error] = "Invalid username & password combination"
      render :new
    end
  end

  def destroy
  end

end