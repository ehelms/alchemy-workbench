source 'http://mirror1.prod.rhcloud.com/mirror/ruby/'
#source 'http://www.rubygems.org'

gem 'rails', '3.2.6'

group :assets do
  gem 'sass-rails', '~> 3.2.3'
  gem 'compass-rails', '~> 1.0.3'
  gem 'therubyracer', '~> 0.10.0', :platforms => :ruby
  gem 'uglifier', '>= 1.0.3'
end

gem 'haml-rails'

gem 'gettext_i18n_rails'

if File.exists? File.expand_path('../alchemy')
  gem 'alchemy', :path => '../alchemy'
else
  gem 'alchemy'
end

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# Bundle the extra gems:
# gem 'bj'
# gem 'nokogiri'
# gem 'sqlite3-ruby', :require => 'sqlite3'
# gem 'aws-s3', :require => 'aws/s3'

# Bundle gems for the local environment. Make sure to
# put test-only gems in this group so their generators
# and rake tasks are available in development mode:
# group :development, :test do
#   gem 'webrat'
# end
