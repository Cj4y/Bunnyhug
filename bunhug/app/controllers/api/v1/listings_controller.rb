#first version of the api
class Api::V1::ListingsController < ApplicationController
    before_action :set_listing, only: [:show, :edit, :update, :destroy]
    def index
        @listings = Listing.all
    end
    def show
    end
    def create
        #instance of listing made from the current user
        @listing = current_user.todo_items.build(listing_params)
      if authorized?
        respond_to do |format|
            #post if success
            #return created status
          if @listing.save
            format.json { render :show, status: :created, location: api_v1_listing_path(@listing) }
          else
            format.json { render json: @listing.errors, status: :unprocessable_entity }
          end
        end
      else
        handle_unauthorized
      end
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
        def authorized?
            @listing.user == current_user
        end
        def handle_unauthorized
            unless authorized?
              respond_to do |format|
                format.json { render :unauthorized, status: 401 }
              end
            end
        end

        #strong parameters for create method
        def listing_params
            params.require(:listing).permit(:title, :category, :image_url, :details
                :active, :flagged, :colour, :price)
        end
end
