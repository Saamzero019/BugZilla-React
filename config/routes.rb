Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :bugs
      resources :registrations
      resources :sessions, only: [:new, :create,:destroy]
      post 'comments/create'
      get '/comments/:id' => "bugs#sendComments"
    end
  end


  
  namespace :api do
    namespace :v1 do
     resources :registrations
     resources :sessions, only: [:new, :create,:destroy]
    end
  end

  root 'homepage#index' 
  get '/*path' => 'homepage#index' # will redirect anyother routes to index

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
