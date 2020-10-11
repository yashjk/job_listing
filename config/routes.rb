Rails.application.routes.draw do
  get "/show" => "jobs#show"
  resources :jobs, only: [ :index, :new, :create ]

end
