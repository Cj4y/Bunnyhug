# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#create fake users
2.times do |i|
    User.create(username: "user#{i+1}", email: "user-#{i+1}@mail.com", password: "password")
end

#titles are similar to Listing-1-user-1@mail.com (slugified)

#create active listings
User.all.each do |u|
  count = 0
    5.times do |i|
      count +=1
        u.listings.create(
          title: "Listing #{count} #{u.username}",
          category: "Category #{i+1}",
          image_url: "photo#{i+1}.jpg",
          details: "Details,Details,Details,Details,Details,Details#{i+1}",
          active: true,
          flagged: false,
          colour: "Colour #{i+1}",
          price: 10+i,
          user_id: i)
    end
    u.reviews.create(
      description: "great vintage seller, fast shipping",
      rating: 5,
      user_id:1
    )
    u.reviews.create(
      description: "item not as described, shipping took forever",
      rating: 1,
      user_id: 2
    )
end


