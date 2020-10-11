Rails.application.routes.draw do

  resources :jobs, only: [ :index, :new, :create ]

end
