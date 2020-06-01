Rails.application.routes.draw do
  resources :incomes
  resources :expenses
  resources :templates
  resources :budgets
  resources :users
  get 'login', to: 'sessions#create', as: :login
  get 'logout', to: 'sessions#destroy', as: :logout
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
