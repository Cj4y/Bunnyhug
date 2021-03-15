class Api::V1::AboutsController < ApplicationController

    def show
        render json: @about
    end
    
end