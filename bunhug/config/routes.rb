Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#listing_display", as: :authenticated_root
  end
  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
