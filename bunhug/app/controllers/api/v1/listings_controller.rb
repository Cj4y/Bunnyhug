#first version of the api
class Api::V1::ListingsController < ApplicationController
    before_action :set_listing, only: [:show, :edit, :update, :destroy]
    def index
    end
    def show
    end
    def create
    end
    def update
    end
    def destroy
    end

    #find listing by ID contained in URL
    private
        def set_listing 
            @listing = Listing.find(params[:id])
        end
end
