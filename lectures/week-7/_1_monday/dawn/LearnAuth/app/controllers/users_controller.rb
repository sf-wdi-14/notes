class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else #saving the user is unsuccessful
      #populate the flash hash with the errors present in active record
      flash[:error] = @user.errors.full_messages.to_sentence
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
