Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#listing_display", as: :authenticated_root
  end
  root 'pages#home'

  #route to listings in v1 of api
  #data return is json format
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :listings, only: [:index, :show, :create, :update, :destroy]
    end
  end

end
