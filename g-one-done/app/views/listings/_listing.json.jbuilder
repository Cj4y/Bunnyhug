json.extract! listing, :id, :title, :category, :photos, :details, :colour, :price, :created_at, :updated_at
json.url listing_url(listing, format: :json)
