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

  def create 
    customer = Customer.create(customer_params)
    render json: CustomerSerializer.new(customer)
  end

  def update
    customer = Customer.find(params[:id])
    customer.update(customer_params)
    render json: CustomerSerializer.new(customer)
  end

  def destroy 
    customer = Customer.find(params[:id])
    customer.destroy()
  end

  private

  def customer_params 
    params.require(:customer).permit(:name)
  end
end
