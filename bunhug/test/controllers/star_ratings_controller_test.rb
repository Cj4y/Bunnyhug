require 'test_helper'

class StarRatingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @star_rating = star_ratings(:one)
  end

  test "should get index" do
    get star_ratings_url
    assert_response :success
  end

  test "should get new" do
    get new_star_rating_url
    assert_response :success
  end

  test "should create star_rating" do
    assert_difference('StarRating.count') do
      post star_ratings_url, params: { star_rating: {  } }
    end

    assert_redirected_to star_rating_url(StarRating.last)
  end

  test "should show star_rating" do
    get star_rating_url(@star_rating)
    assert_response :success
  end

  test "should get edit" do
    get edit_star_rating_url(@star_rating)
    assert_response :success
  end

  test "should update star_rating" do
    patch star_rating_url(@star_rating), params: { star_rating: {  } }
    assert_redirected_to star_rating_url(@star_rating)
  end

  test "should destroy star_rating" do
    assert_difference('StarRating.count', -1) do
      delete star_rating_url(@star_rating)
    end

    assert_redirected_to star_ratings_url
  end
end
