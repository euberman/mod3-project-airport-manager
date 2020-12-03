class AircraftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :model, :customer
end
