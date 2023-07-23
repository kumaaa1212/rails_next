class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @posts = Post.all
    render json: @posts
  end
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  def create
  @post = Post.new(post_params)
  if @post.save
    render json: @post, status: :created
  else
    render json: { errors: @post.errors }, status: :unprocessable_entity
  end
 end
  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors }, status: 422
    end
  end
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head 204
  end
  private
    def post_params
      params.require(:post).permit(:title, :content)
    end
end



# updateはput
# createはpost
# destroyはdelete
# showはget
# indexはget


