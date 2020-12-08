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

  def create 
    workorder = Workorder.create(workorder_params)
    render json: WorkorderSerializer.new(workorder)
  end

  def update
    workorder = Workorder.find(params[:id])
    workorder.update(workorder_params)
    render json: WorkorderSerializer.new(workorder)
  end

  def destroy 
    workorder = Workorder.find(params[:id])
    workorder.destroy()
  end

  private

  def workorder_params 
    params.require(:workorder).permit(:date, :customer_id, :aircraft_id, :hangar_id, :arrivingToday, :completed, :work_status)
  end


# ==================================================================
# Methods using only Rails
#   def index
  #     workorders = Workorder.all
  #     if workorders
  #       render json: workorders.to_json(:include => {
  #         :workorder => {:only => [:name]}, 
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
  #         :workorder => {:only => [:name]}, 
  #         :aircraft => {:only => [:model]} #,:service_items
  #       }, :except => [:updated_at])
  #     else 
  #       render json: {message: 'No workorder found with that id'}
  #     end
  #   end

  # end
end