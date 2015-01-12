class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  private
  def current_user
    #if @current_user is not defined set it equal to the result using the session hash given that exists
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end

  helper_method :current_user, :user_signed_in?
  
end
