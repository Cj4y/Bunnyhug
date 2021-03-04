#pass listings objects as list into json partial 
json.array! @listings, partial: "api/v1/listings/listing", as: :listing
