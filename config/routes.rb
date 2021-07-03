Rails.application.routes.draw do
  root to: 'main#index'
  resources :main
  resources :pawa
  resources :noka
  get 'main/', to: 'main#checked'
  post 'api_markdown' => 'pages#api_markdown'
end

