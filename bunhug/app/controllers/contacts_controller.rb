class ContactsController < ApplicationController

    def show
        render json: @contact
    end
    
end