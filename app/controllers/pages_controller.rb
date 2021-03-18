class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:my_listings]
  def home
  end
  def my_listings
  end
  def item_galleries
  end 
  def abouts
  end
  def contacts
  end
end
