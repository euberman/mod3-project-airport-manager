Rails.application.routes.draw do
  resources :aircrafts
  resources :workorders
  resources :service_items
  resources :services
  resources :customers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
