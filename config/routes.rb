Rails.application.routes.draw do
  root 'homepage#index'
  devise_for :users
  authenticated :user do
    root "pages#my_listings", as: :authenticated_root
  end
  #root 'pages#home'
  
  #route to listings in v1 of api
  #data return is json format
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :listings, only: [:index, :show, :create, :update, :destroy], as: 'my_listings'
      resource :item_gallery, only: [:index, :show], as: 'galleries'
      resource :about, only:[:show]
      resource :contacts, only:[:show]
    end
  end
  

  

#  match '/home' => 'pages#home'
#match '/about' => 'pages#about'
#match '/contact' => 'pages#contact'
end
