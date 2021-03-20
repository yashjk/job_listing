Rails.application.routes.draw do
  root "jobs#index"
  resources :jobs, only: [ :index, :new, :create, :show ]

end
