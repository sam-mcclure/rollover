Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :follows, only: [:create, :destroy, :index]
    end

    resource :session, only: [:create, :destroy]
    
    resources :posts, only: [:create, :index, :show, :destroy, :update] do
      resources :likes, only: [:create, :destroy]
    end

  end
end
