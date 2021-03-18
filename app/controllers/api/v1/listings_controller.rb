class Api::V1::ListingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_listing, only: [:show, :edit, :update, :destroy]

  def index
    #@query = params[:query]
    #@lisitings = Concert.search(@query)
    #old @listings = current_user.listings.all
    respond_to do |format|
      format.html {}
      format.json { render(json: {listings: @listings}) }
    end
  end

  def show
    #if authorized?
      render(
        partial: "listings/add_listing",
        locals: {listing: @listing, user: current_user}
      )
    #end
    #else
      #handle_unauthorized
    #end
  end    

  # GET /listings/new
  def new
    @listing = Listing.new
  end

  # GET /listings/1/edit
  def edit
  end

  
  # POST /listings
  # POST /listings.json
  def create
    #@listing= current_user.listings.build(listing_params)
    @listing= Listing.new(listing_params)

    #if authorized?
      respond_to do |format|
        if @listing.save
          format.json { render :show, status: :created, location: api_v1_my_listing_path(@listing) }
        else
          format.html { render(:new) } #add corresponding html file
          # TODO: Handle errors
          format.json do  
            render( json: @listing.errors, status: :unprocessable_entity )
        end
     # end
    #else
     # handle_unauthorized
    #end
    
  end

  # PATCH/PUT /listings/1
  # PATCH/PUT /listings/1.json
  def update
    #if authorized?
      respond_to do |format|
        if @listing.update(listing_params)
          format.turbo_stream {}
          format.html do
            render(
              partial: "listings/add_listing",
              locals: {listing: @listing, user: current_user}
            )
          end
          format.json { render :show, status: :ok, location: api_v1_my_listing_path(@listing) }
        else
          format.html { render(:edit) }
          # TODO: Handle errors
          format.json do
             render( json: @listing.errors, status: :unprocessable_entity )
        end
     # end
    #else
      #handle_unauthorized
    #end
  end

# Callbacks to share common setup or constraints bt actions
private def set_listing
  #@listing = Listing.includes(:categories).find(params[:id])
end

  def destroy
    #if authorized?
      @listing.destroy
      respond_to do |format|
        format.json { head :no_content }
     # end
    #else
     # handle_unauthorized
    #end
  end

  private def set_listing
      @listing= Listing.find(params[:id])
    end

   # def authorized?
    #   @listing.user == current_user
    #end

    #def handle_unauthorized
      #unless authorized?
       # respond_to do |format|
        #  format.json { render :unauthorized, status: 401 }
        #end
      #end
    #end

    def listing_params
      #:id, :user_id, :title, :category, :image_url, :details, :active, :created_at, :updated_at
      params.require(:listing).permit(
        :title, 
        :category, 
        :image_url, 
        :details, 
        :colour, 
        :price, 
        :active)
    end    
end