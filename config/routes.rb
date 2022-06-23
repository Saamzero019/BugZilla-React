Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      post 'comments/create'
      get '/comments/:id' => "bugs#sendComments"
    end
  end
  namespace :api do
    namespace :v1 do
     resources :bugs
     
    end
  end
  get '/*path' => 'homepage#index' # will redirect anyother routes to index
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
