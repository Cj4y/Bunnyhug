require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "uthe false" do
     assert false
   end
   def setup
      @user.new(email: "user@user.ca", password: "passme23234")
    end

#should return true
  test "should be valid" do
    assert @user.valid?
  end

end
