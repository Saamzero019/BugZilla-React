class Api::V1::BugsController < ApplicationController
  def index
    @bugs = Bug.all.order(created_at: :desc) # order by magic column (date creation by desc) 
    render json: @bugs # this should render all bugs data as json(response) though route to be fetched by react front 
  end

  def create
     @bugs = Bug.create!(bug_params) # 
    if @bug
      render json: @bugs
    else 
      render json:@Bugs.errors
    end 


  end

  def show
    if givenBug
      render json: givenBug
      else 
        render  json: givenBug.errors
  end

  def destroy
    givenBug&.destroy
    render json: { message: 'Bug was deleted!' }
  end


  private

  def bug_params
    params.require(:bugs).permit(:title, :priority, :completetion_days, :description) 
    # require make sure their presence and permit sort of filter them 
  end 

  def givenBug
    @bugs = Bug.find(param[:id])
  end

end
