class Bug < ApplicationRecord

    has_many :comments, dependent: :destroy

    # validation for parameters
    validates :title, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}
    validates :priority, presence: true
    validates :completetion_days , presence: true,  numericality: {  only_integer: true }
    validates :description, presence: true 

    # ineteger to named values 
    enum priority: ["Low", "Medium", "High"]
end
