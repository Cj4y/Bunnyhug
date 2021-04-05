ENV["RAILS_ENV"] = "test"   # force to be in test environment
require File.expand_path("../../config/environment", __FILE__)  # loads the application
require "minitest/autorun"