class Listing < ApplicationRecord
    before_create :slugify
    has_many :order_items
    before_destroy :ensure_not_referenced_by_any_order_item

    def slugify
        self.slug = title.parameterize
    end

    private
    #hook method for checking if item can be deleted
    #called before destruction of row
    def ensure_not_referenced_by_any_order_item
        unless order_items.empty?
            #associate error with base object
            errors.add(:base, 'Order Items present')
            throw :abort
        end
    end
end
