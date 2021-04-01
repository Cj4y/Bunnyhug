module Api
  module V1
    class ReviewsController < ApplicationController
      #require user sign in to operate on their reviews
     # before_action :authenticate


      #TODO attach to user public profile
      def index
        reviews = Review.all
        render json: ReviewSerializer.new(reviews).serializable_hash.to_json
      end

      def show
        #review = current_user.review.find_by(slug: params[:slug])
        review = Review.find_by(slug: params[:slug])
        render json: ReviewSerializer.new(review).serializable_hash.to_json
      end

      # create /api/v1/reviews
      def create
        #review = current_user.reviews.new(review_params)
        review = Reviews.new(review_params)
        if review.save
          render json: ReviewSerializer.new(review).serializable_hash.to_json
        else
          render json: errors(review), status: 422
        end
      end

      # delete by /api/v1/reviews/:id
      def destroy
        review = Reviews.find(params[:id])
        if review.destroy
          head :no_content
        else
          render json: errors(review), status: 422
        end
      end

      private
      # Allow only strong params
      def review_params
        params.require(:review).permit(:description, :rating, :user_id)
      end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
