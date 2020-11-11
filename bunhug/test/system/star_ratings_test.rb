require "application_system_test_case"

class StarRatingsTest < ApplicationSystemTestCase
  setup do
    @star_rating = star_ratings(:one)
  end

  test "visiting the index" do
    visit star_ratings_url
    assert_selector "h1", text: "Star Ratings"
  end

  test "creating a Star rating" do
    visit star_ratings_url
    click_on "New Star Rating"

    click_on "Create Star rating"

    assert_text "Star rating was successfully created"
    click_on "Back"
  end

  test "updating a Star rating" do
    visit star_ratings_url
    click_on "Edit", match: :first

    click_on "Update Star rating"

    assert_text "Star rating was successfully updated"
    click_on "Back"
  end

  test "destroying a Star rating" do
    visit star_ratings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Star rating was successfully destroyed"
  end
end
