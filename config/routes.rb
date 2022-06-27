Rails.application.routes.draw do
  # scope :api_v1, defaults: { format: :json } do
  #   devise_for :users
  # end

  
  devise_for :users, path: 'api/v1', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'api/v1/override/sessions', 
    registrations: 'api/v1/override/regisrations'
  }
  
  namespace :api do
    namespace :v1 do
      resources :bugs
      #resources :registrations #checking spelling
      #resources :sessions, only: [:new, :create,:destroy]
      post 'comments/create'
      get '/comments/:id' => "bugs#sendComments"
      get '/member-data', to: 'members#show'
      get '/users', to: 'members#index'
      
    end
  end


  
  namespace :api do
    namespace :v1 do
      namespace :override do
        delete '/logout', to: "sessions#destroy"
        get 'logged_in', to: "sessions#logged_in"
      
      end   
    end
  end

  root 'homepage#index' 
  get '/*path' => 'homepage#index' , format: false# will redirect anyother routes to index

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
