# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Product.delete_all
Product.create!(title: 'Midi dress Marimekko',
    category: 'dress',    
    details: 
        %{<p>
        <em>One size too large!</em>
        lightly used, never had the chance to wear. 
        </p>},
    photos: 'image.png',
    colour: 'orange'
    price: 150.00)