class AnimalsController < ApplicationController

  def index
    @animals = Animals.all
    render :index
  end

  def new
    render :new
  end

  def create
    byebug #for debugging params
    Animals.create(params["name"])
    redirect_to root_path
  end

end