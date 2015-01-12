class User < ActiveRecord::Base
  validates :username, presence: true
  validates :password, length: { within: 6..40 }
  has_secure_password

end
