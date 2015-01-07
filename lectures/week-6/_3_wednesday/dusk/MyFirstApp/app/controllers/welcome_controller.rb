class WelcomeController < ApplicationController

  def shmee
    @names = ["Joe", "Kay", "Pardo", "Ilias"]
    render :bananas
  end

  def redirecting
    p "WORKING"
    redirect_to root_path
  end

end
