bundle install
yarn
bundle exec rails db:drop
bundle exec rails db:create
bundle exec rails db:migrate
