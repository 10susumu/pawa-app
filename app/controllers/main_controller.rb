class MainController < ApplicationController
  def index
    # @busho = Busho.all.to_json
    @busho = Busho.all
    @senjutsu = @busho.first.senjutsu
    @enemy_myrate = Busho.first.myrate
    @enemy_opprate = Busho.first.oppnentrate
    @ally_myrate = Busho.first.myrate
    @ally_opprate = Busho.first.oppnentrate
    @busho_json = @busho.to_json.html_safe
  end

  def get_senjutsu
    render partial: 'slect_senjutsu', locals: {busho_id: params[:busho_id]}
  end

  def checked

    binding.pry

    post = Post.find(params[:id])
    if post.checked 
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end

end
