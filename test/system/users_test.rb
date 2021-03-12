require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  def setup
    @user = users(:confirmed_user)
  test "should register" do
    visit new_user_registration_path

    assert_difference("User.count") do
      fill_in "Email", with "unique@example.com"
      fill_in "Password", with "password"
      click_button "Sign up"
    end
  end

  test "should sign in" do
    visit new_user_session_path

    fill_in "Email", with: @user.email
    fill_in "Password", with: user.password

    click_button "Log in"
    assert_selector "p", text: "signed in successfully."
  end
  # test "visiting the index" do
  #   visit users_url
  #
  #   assert_selector "h1", text: "Users"
  # end
end
