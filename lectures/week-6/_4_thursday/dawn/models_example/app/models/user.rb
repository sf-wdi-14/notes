class User < ActiveRecord::Base
  validates :first_name, presence: true, uniqueness: true
  validates :last_name, presence: true
end
