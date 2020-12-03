class ServiceItemsController < ApplicationController
  def index
    serviceItems = ServiceItem.all
    if serviceItems
      render json: ServiceItemSerializer.new(serviceItems)
    else 
      render json: {message: 'No serviceItems found'}
    end
  end

  def show
    serviceItem = ServiceItem.find_by(id: params[:id])
    if serviceItem
      render json: ServiceItemSerializer.new(serviceItem)
    else 
      render json: {message: 'No serviceItem found with that id'}
    end
  end
end
