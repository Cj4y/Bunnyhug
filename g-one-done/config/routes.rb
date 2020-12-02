Rails.application.routes.draw do
  #no datebase model, route the get, post, etc requests
  get 'admin' => 'admin#index'
  controller :sessions do
    get  'login' => :new
    post 'login' => :create
    delete 'logout' => :destroy
  end


  get 'admin/index'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  resources :listings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
