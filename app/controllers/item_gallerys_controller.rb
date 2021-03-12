class ItemGallerysController < ApplicationController

def index
    @gallerys = Display.all

    render json: @gallerys
end
def show
    render json: @gallery
end

end