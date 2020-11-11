require 'test_helper'

class ListingDisplaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @listing_display = listing_displays(:one)
  end

  test "should get index" do
    get listing_displays_url
    assert_response :success
  end

  test "should get new" do
    get new_listing_display_url
    assert_response :success
  end

  test "should create listing_display" do
    assert_difference('ListingDisplay.count') do
      post listing_displays_url, params: { listing_display: {  } }
    end

    assert_redirected_to listing_display_url(ListingDisplay.last)
  end

  test "should show listing_display" do
    get listing_display_url(@listing_display)
    assert_response :success
  end

  test "should get edit" do
    get edit_listing_display_url(@listing_display)
    assert_response :success
  end

  test "should update listing_display" do
    patch listing_display_url(@listing_display), params: { listing_display: {  } }
    assert_redirected_to listing_display_url(@listing_display)
  end

  test "should destroy listing_display" do
    assert_difference('ListingDisplay.count', -1) do
      delete listing_display_url(@listing_display)
    end

    assert_redirected_to listing_displays_url
  end
end
