class Listing < ApplicationRecord
  before_create :slugify

  def slugify
      self.slug = title.parameterize
  end
end
