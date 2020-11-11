Rails.application.routes.draw do
  resources :listing_displays
  resources :transactions
  resources :star_ratings
  resources :favourites
  resources :accounts
  resources :orders
  resources :listings
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
get 'home/index'
root 'home#index'

end
