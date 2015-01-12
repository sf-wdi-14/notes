class AnimalsController < ApplicationController

  def index
    @animals = Animal.all
  end  

  def new
  end

  def create
    Animal.create(params["name"])
    redirect_to root_path
  end

end