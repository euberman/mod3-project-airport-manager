class WorkorderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :completed, :work_status, :customer, :aircraft, :service_items
end

# create_table "workorders", force: :cascade do |t|
#   t.datetime "date"
#   t.integer "customer_id"
#   t.integer "aircraft_id"
#   t.boolean "completed", default: false
#   t.string "work_status", default: "scheduled"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["aircraft_id"], name: "index_workorders_on_aircraft_id"
#   t.index ["customer_id"], name: "index_workorders_on_customer_id"
# end