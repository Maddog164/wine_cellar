Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
        # get "/users" => "UsersController#index"
      resources :wines
      # resources :users, only: [:index, :create, :update, :delete, :show]
      # # get "/users" => "UsersController#index"
      # resources :wines, only: [:index, :create, :update, :delete, :show]
    end
  end
    
end