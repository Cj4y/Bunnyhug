class ListingDisplaysController < ApplicationController
  before_action :set_listing_display, only: [:show, :edit, :update, :destroy]

  # GET /listing_displays
  # GET /listing_displays.json
  def index
    @listing_displays = ListingDisplay.all
  end

  # GET /listing_displays/1
  # GET /listing_displays/1.json
  def show
  end

  # GET /listing_displays/new
  def new
    @listing_display = ListingDisplay.new
  end

  # GET /listing_displays/1/edit
  def edit
  end

  # POST /listing_displays
  # POST /listing_displays.json
  def create
    @listing_display = ListingDisplay.new(listing_display_params)

    respond_to do |format|
      if @listing_display.save
        format.html { redirect_to @listing_display, notice: 'Listing display was successfully created.' }
        format.json { render :show, status: :created, location: @listing_display }
      else
        format.html { render :new }
        format.json { render json: @listing_display.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /listing_displays/1
  # PATCH/PUT /listing_displays/1.json
  def update
    respond_to do |format|
      if @listing_display.update(listing_display_params)
        format.html { redirect_to @listing_display, notice: 'Listing display was successfully updated.' }
        format.json { render :show, status: :ok, location: @listing_display }
      else
        format.html { render :edit }
        format.json { render json: @listing_display.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /listing_displays/1
  # DELETE /listing_displays/1.json
  def destroy
    @listing_display.destroy
    respond_to do |format|
      format.html { redirect_to listing_displays_url, notice: 'Listing display was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing_display
      @listing_display = ListingDisplay.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def listing_display_params
      params.fetch(:listing_display, {})
    end
end
