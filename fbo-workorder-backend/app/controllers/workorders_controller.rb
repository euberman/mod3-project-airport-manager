class WorkordersController < ApplicationController

  def index
    workorders = Workorders.all
    if workorders
      render json: workorders.to_json(:include => {
        :customer => {:only => [:name]}, 
        :aircraft => {:only => [:model]},
        :service_items
      }, :except => [:updated_at])
    else 
      render json: {message: 'No workorders found'}
    end
  end

  def show
    workorder = Workorder.find_by(id: params[:id])
    if workorder
      render json: workorder.to_json(:include => {
        :customer => {:only => [:name]}, 
        :aircraft => {:only => [:model]},
        :service_items
      }, :except => [:updated_at])
    else 
      render json: {message: 'No workorder found with that id'}
    end
  end

end
