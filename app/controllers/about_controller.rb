class AboutController < ApplicationController

    def show
        render json: @about
    end
    
end