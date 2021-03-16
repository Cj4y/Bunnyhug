#pass listings objects as list into json partial 
json.array! @item_galleries, partial: "api/v1/item_gallery/item_gallery", as: :item_gallery
