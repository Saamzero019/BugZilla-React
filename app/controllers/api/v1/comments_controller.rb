class Api::V1::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
        render json: {message: "Successfully Added"}
    else
      render json: @comment.errors
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:description, :bug_id)
  end
end
