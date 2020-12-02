class Customer < ApplicationRecord
  has_many :aircrafts
  has_many :workorders
end
