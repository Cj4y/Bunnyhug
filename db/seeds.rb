# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
2.times do |i|
    User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
end

#create active listings
User.all.each do |u|
    10.times do |i|
        u.listings.create(title: "Listing #{i+1}, #{u.email}", category: "Category #{i+1}", image_url: "photo#{i+1}.jpg",
         details: "Details,Details,Details,Details,Details,Details#{i+1}", 
         active: true, flagged: false, colour: "Colour #{i+1}", price: 10+i)
    end
end    
