require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  test "listing attributes must not be empty" do
    listing = Listing.new
    assert listing.invalid?
    assert listing.errors[:title].any?
    assert listing.errors[:category].any?
    assert listing.errors[:details].any?
    assert listing.errors[:photos].any?
    assert listing.errors[:price].any?
    assert listing.errors[:colour].any?
    end
    
    test "listing price must be positive" do
      listing = Listing.new(title: "My item ",
      category: "dress",
      details: "yyy",
      photos: "zzz.jpg",
      colour: "blue") 
      listing.price = -1
      assert listing.invalid?
      assert_equal ["must be greater than or equal to 0.01"],
      listing.errors[:price]
      listing.price = 0
      assert listing.invalid?
      assert_equal ["must be greater than or equal to 0.01"],
      listing.errors[:price]
      listing.price = 1
      assert listing.valid?
    end
    
    def new_listing(photos)
      Listing.new(title: "My item title",
      category: "boots",
      details: "yyy",
      colour: "red",
      price: 1,
      photos: photos)
    end

    test "photos" do
      ok = %w{ fred.gif fred.jpg fred.png FRED.JPG FRED.Jpg
      http://a.b.c/x/y/z/fred.gif }

      bad = %w{ fred.doc fred.gif/more fred.gif.more }

      ok.each do |photos|
      assert new_listing(photos).valid?,
      "#{photos} shouldn't be invalid"
      end

      bad.each do |photos|
      assert new_listing(photos).invalid?,
      "#{photos} shouldn't be valid"
      end
    end
end