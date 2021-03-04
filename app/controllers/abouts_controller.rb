class AboutsController < ApplicationController

    def show
        render json: @about
    end
    
end