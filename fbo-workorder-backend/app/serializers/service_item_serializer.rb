class ServiceItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :service, :workorder_id, :completed
end
