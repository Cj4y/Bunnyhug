
#
#render into json as reusable partial
#json.extract! listing, :id, :user_id,  :title, :category, :image_url, :details, :active, :flagged, :colour, :price, :created_at, :updated_at
#render into json as reusable partial
json.extract! listing, :id, :user_id, :title, :category, :image_url, :details, :colour, :price, :active, :created_at, :updated_at
