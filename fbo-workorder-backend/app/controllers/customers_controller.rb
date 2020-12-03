class CustomersController < ApplicationController

  def index
    customers = Customer.all
    if customers
      render json: CustomerSerializer.new(customers)
    else 
      render json: {message: 'No customers found'}
    end
  end

  def show
    customer = Customer.find_by(id: params[:id])
    if customer
      render json: CustomerSerializer.new(customer)
    else 
      render json: {message: 'No customer found with that id'}
    end
  end

end
