class Api::V1::ListingsController < ApplicationController
    #authenticate user before allowing changes to their listings
    before_action :authenticate, only: %i[create update destroy]
    #TODO:user current_user for above



    #temporarily needed for csrf token error
    protect_from_forgery with: :null_session

    #get all of the listings from the database and render it as JSON
    #uses listing_serializer
    def index
        render json: ListingSerializer.new(listings).serializable_hash.to_json
    end

    #show listings using slug as param from Listing model
    def show
        #listing = current_user.listings.find_by(slug: params[:slug])
        #listing = Listing.find_by(listing)
        render json: ListingSerializer.new(listing).serializable_hash.to_json
    end

    #create lisitngs
    def create
        listing = current_user.listings.new(listing_params)
        #if listing is valid according to params
        if listing.save
            render json: ListingSerializer.new(listing).serializable_hash.to_json
        #if not, show error 422
        else
            render json: {error: listing.errors.messages}, status: 422
        end
    end

    #update listing record
    def update
        listing = current_user.listings.find_by(slug: params[:slug])

        if listing.update(listing_params)
            render json: ListingSerializer.new(listing).serializable_hash.to_json
        else
            render json: {error: listing.errors.messages}, status: 422
        end
    end

    #delete listing record, find by slug
    def destroy
       listing = current_user.listings.find_by(slug: params[:slug])
        if listing.destroy
            head :no_content
        else
            render json: {error: listing.errors.messages}, status: 422
        end
    end


    # Get all listings
    def listings
      #@listings ||= Airline.includes(reviews: :user).all
      @listings ||= Listing.all
    end

     # Get a specific airline
    def listing
      @listing ||= Listing.find_by(slug: params[:slug])
    end



    # serializer gem
    def serializer(records, options = {})
      #ReviewSerializer
      ListingSerializer
        .new(records, options)
        .serializable_hash.to_json
    end

    #require allowed parameters
    private
    def listing_params
        params.require(:listing).permit(:title, :image_url, :price, :user_id)
    end

    def options
        @options ||={include: %i[users]}
    end
end
