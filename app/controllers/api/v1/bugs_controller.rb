class Api::V1::BugsController < ApplicationController

  before_action :givenBug, only: [:destroy, :show]
  

  def index
    @bugs = Bug.all.order(created_at: :desc) # order by magic column (date creation by desc) 
    render json: @bugs # this should render all bugs data as json(response) though route to be fetched by react front 
  end

  def create 
     @bugs = Bug.create(bug_params)  
    if @bugs
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
  end

  def edit
    if givenBug
      render json: givenBug
    else 
        render  json: givenBug.errors
    end 
  end
  
  def sendComments
    @comments = Bug.find(params[:id]).comments
    if @comments
      render json: @comments
    else
      render json: @@comments.errors
    end
  end

  def update  
      if @bugs = Bug.update(bug_params)
        render json: @bugs # {head:ok} # {message: "Bug was updated!"}
      else 
        render json:@Bugs.errors
      end 
  end

  def destroy
    givenBug&.destroy
    render json: { message: 'Bug was deleted!' }
  end

  private

  def bug_params
    params.require(:bug).permit(:title, :priority, :completetion_days, :description) 
    # require make sure their presence and permit sort of filter them 
  end 

  def givenBug
    @bugs = Bug.find(params[:id])
  end

end


#TODO: check if updated or created is not longer required on front end then dont return object .. just return head:ok or any single status