class ServiceItemsController < ApplicationController
  def index
    service_items = ServiceItem.all
    if service_items
      render json: ServiceItemSerializer.new(service_items)
    else 
      render json: {message: 'No service_items found'}
    end
  end

  def show
    service_item = ServiceItem.find_by(id: params[:id])
    if service_item
      render json: ServiceItemSerializer.new(service_item)
    else 
      render json: {message: 'No service_item found with that id'}
    end
  end

  def create 
    service_item = ServiceItem.create(service_item_params)
    render json: ServiceItemSerializer.new(service_item)
  end

  def update
    service_item = ServiceItem.find(params[:id])
    service_item.update(service_item_params)
    render json: ServiceItemSerializer.new(service_item)
  end

  def destroy 
    service_item = ServiceItem.find(params[:id])
    service_item.destroy()
  end

  private

  def service_item_params 
    params.require(:service_item).permit(:date, :customer_id, :aircraft_id, :hangar_id, :arrivingToday, :completed, :work_status)
  end

end
