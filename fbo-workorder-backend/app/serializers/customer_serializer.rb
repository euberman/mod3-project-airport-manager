class CustomerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :aircrafts
end
