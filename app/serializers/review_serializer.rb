class ReviewSerializer
  include JSONAPI::Serializer
  attributes :description, :rating, :user_id
end
