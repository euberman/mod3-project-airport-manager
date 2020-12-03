class ServiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price
end
