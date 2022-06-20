class Bug < ApplicationRecord
    # validation for parameters
    validates :title, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}
    validates :priority, presence: true
    validates :completetion_days , presence: true,  numericality: {  only_integer: true }
    validates :description
    
end
