class ServiceItem < ApplicationRecord
  belongs_to :workorder
  belongs_to :service
end
