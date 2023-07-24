# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3100'
    resource '*', headers: :any, methods: [:get, :post, :options, :put, :delete]
  end
end