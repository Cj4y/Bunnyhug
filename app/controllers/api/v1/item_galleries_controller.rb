class Api::V1::ItemGalleriesController < ApplicationController

    def show
        @listings = Listing.all
        @galleries = Display.all
        
        respond_to do |format|
            format.heml
            format.json{render(json: @listings)}
        end
    end
