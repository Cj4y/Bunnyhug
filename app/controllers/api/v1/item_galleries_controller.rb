class Api::V1::ItemGalleriesController < ApplicationController

def index
    @galleries = Display.all

    render json: @galleries
end
def show
    render json: @galleries
end

end