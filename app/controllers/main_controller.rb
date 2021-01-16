class MainController < ApplicationController
  def index
    # @busho = Busho.all.to_json
    @busho = Busho.all
    @busho_json = @busho.to_json.html_safe
  end

end
