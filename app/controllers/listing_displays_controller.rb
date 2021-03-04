class ListingDisplaysController < ApplicationController

def index
    @displays = Display.all

    render json: @displays
end
def show
    render json: @display
end

end