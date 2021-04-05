Rails.application.routes.draw do
  resources :order_items
  resources :carts

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      #make slug the primary parameter for listings
      resources :listings, param: :slug
      resources :reviews, only: [:index, :show, :create, :destroy]
      resources :cart
      resources :order_items
      resources :auth, only: %i[create] do
        collection do
          post 'password/forgot', to: 'auth#forgot_password'
          post 'password/reset', to: 'auth#reset_password'
          get 'me', to: 'auth#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end

      resources :registrations, only: %i[create]
    end
  end

  #reroute unexpected paths to api/v1
  get '*path', to: 'pages#index', via: :all
end
