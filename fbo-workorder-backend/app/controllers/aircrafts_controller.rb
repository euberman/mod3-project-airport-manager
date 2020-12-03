class AircraftsController < ApplicationController
  def index
    aircrafts = Aircraft.all
    if aircrafts
      render json: AircraftSerializer.new(aircrafts)
    else 
      render json: {message: 'No aircrafts found'}
    end
  end

  def show
    aircraft = Aircraft.find_by(id: params[:id])
    if aircraft
      render json: AircraftSerializer.new(aircraft)
    else 
      render json: {message: 'No aircraft found with that id'}
    end
  end
end
