class Review < ApplicationRecord
  belongs_to :user

  #validates :name, presence: true, length: { maximum: 255 }

  # Slugify airline name into a url safe param before create
  # Ex: 'United Airlines'.parameterize => 'united-airlines'

  #TODO attach user identifier
  # before_create -> (user) do
  #   user.slug = user.name.parameterize
  # end

  # Get the average score of all reviews for an airline
  def calculate_average
    return 0 unless reviews.size.positive?

    avg = reviews.average(:score).to_f.round(2) * 100
    update_column(:average_score, avg)
  end

end
