class User < ActiveRecord::Base
  has_secure_password
  validates :username, presence: true
  validates :password, length: {within: 6..40}
end
