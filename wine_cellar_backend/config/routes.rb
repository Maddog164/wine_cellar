Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  
 namespace :api do
    namespace :v1 do
      resources :users
        # get "/users" => "UsersController#index"
      resources :wines
        # get '/options', to: "WinesController#get_options"
      # resources :users, only: [:index, :create, :update, :delete, :show]
      # # get "/users" => "UsersController#index"
      # resources :wines, only: [:index, :create, :update, :delete, :show]
    end
  end

  get '/api/v1/search' => 'api/v1/wines#get_options', as: 'search'
    
end