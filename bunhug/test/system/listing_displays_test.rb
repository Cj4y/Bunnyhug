require "application_system_test_case"

class ListingDisplaysTest < ApplicationSystemTestCase
  setup do
    @listing_display = listing_displays(:one)
  end

  test "visiting the index" do
    visit listing_displays_url
    assert_selector "h1", text: "Listing Displays"
  end

  test "creating a Listing display" do
    visit listing_displays_url
    click_on "New Listing Display"

    click_on "Create Listing display"

    assert_text "Listing display was successfully created"
    click_on "Back"
  end

  test "updating a Listing display" do
    visit listing_displays_url
    click_on "Edit", match: :first

    click_on "Update Listing display"

    assert_text "Listing display was successfully updated"
    click_on "Back"
  end

  test "destroying a Listing display" do
    visit listing_displays_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Listing display was successfully destroyed"
  end
end
