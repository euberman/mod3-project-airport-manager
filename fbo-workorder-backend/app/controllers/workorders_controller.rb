class WorkordersController < ApplicationController

  # methods using JSON_API
  def index
    workorders = Workorder.all
    if workorders
      render json: WorkorderSerializer.new(workorders)
    else 
      render json: {message: 'No workorders found'}
    end
  end

  def show
    workorder = Workorder.find_by(id: params[:id])
    if workorder
      render json: WorkorderSerializer.new(workorder)
    else 
      render json: {message: 'No workorder found with that id'}
    end
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

# ==================================================================
# Methods using only Rails
#   def index
  #     workorders = Workorder.all
  #     if workorders
  #       render json: workorders.to_json(:include => {
  #         :customer => {:only => [:name]}, 
  #         :aircraft => {:only => [:model]}
  #       }, :except => [:updated_at])
  #     else 
  #       render json: {message: 'No workorders found'}
  #     end
  #   end

  #   def show
  #     workorder = Workorder.find_by(id: params[:id])
  #     if workorder
  #       render json: workorder.to_json(:include => {
  #         :customer => {:only => [:name]}, 
  #         :aircraft => {:only => [:model]} #,:service_items
  #       }, :except => [:updated_at])
  #     else 
  #       render json: {message: 'No workorder found with that id'}
  #     end
  #   end

  # end
end