class CustomersController < ApplicationController

  def index
    customers = Customers.all
    if customers
      render json: customers, include: [:name, :aircrafts], except: [:updated_at]
    else 
      render json: {message: 'No customers found'}
    end
  end

  def show
    customer = Customer.find_by(id: params[:id])
    if customer
      render json: customer, include: [:name, :aircrafts], except: [:updated_at]
    else 
      render json: {message: 'No customer found with that id'}
    end
  end

end
