class ServicesController < ApplicationController
  def index
    services = Service.all
    if services
      render json: ServiceSerializer.new(services)
    else 
      render json: {message: 'No services found'}
    end
  end

  def show
    service = Service.find_by(id: params[:id])
    if service
      render json: ServiceSerializer.new(service)
    else 
      render json: {message: 'No service found with that id'}
    end
  end
end
