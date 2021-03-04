require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get listing_display" do
    get pages_listing_display_url
    assert_response :success
  end

end
