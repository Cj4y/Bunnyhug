class Api::V1::ContactsController < ApplicationController

    def show
        render json: @contact
    end
    
end