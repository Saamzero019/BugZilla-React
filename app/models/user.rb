class User < ApplicationRecord
  #has_secure_password
  validates_presence_of :email, :password
  validates_uniqueness_of :email

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist


       enum role: [:manager,:qa,:developer]
end
