class ListingSerializer
  include JSONAPI::Serializer
  attributes :title, :slug, :image_url, :price, :user_id
end
