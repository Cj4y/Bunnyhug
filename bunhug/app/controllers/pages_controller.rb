class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:my_listings]
  def home
  end

  def listing_display
  end
end
