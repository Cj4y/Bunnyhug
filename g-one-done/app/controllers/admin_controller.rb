class AdminController < ApplicationController
  def index
    @total_listings = Listing.count
  end
end
