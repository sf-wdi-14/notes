class User < ActiveRecord::Base
<<<<<<< HEAD
  validates :first_name, presence: true, uniqueness: true
  validates :last_name, presence: true
=======
  validates_presence_of :first_name
  validates_presence_of :last_name
>>>>>>> development
end
