class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      #happy state
      redirect_to root_path
    else #error state
      flash[:error] = @user.errors.full_messages.to_sentence
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
