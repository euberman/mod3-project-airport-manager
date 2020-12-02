class Workorder < ApplicationRecord
  belongs_to :customer
  belongs_to :aircraft
  has_many :service_items
  has_many :services, through: :service_items
end
