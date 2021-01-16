Rails.application.routes.draw do
  root to: 'main#index'
  resources :main
  get 'main/', to: 'main#checked'
  post 'api_markdown' => 'pages#api_markdown'
end

