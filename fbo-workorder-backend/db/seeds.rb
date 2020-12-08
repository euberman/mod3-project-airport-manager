# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

Workorder.delete_all
ServiceItem.delete_all
Service.delete_all
Customer.delete_all
Aircraft.delete_all


customer1 = Customer.create(name: 'Joey Thomas')
customer2 = Customer.create(name: 'Tom Hudson')
customer3 = Customer.create(name: 'Mark Cuban')
customer4 = Customer.create(name: 'Luke Yound')
customer5 = Customer.create(name: 'Luke Fritz')
customer6 = Customer.create(name: 'Tyler Seguin')

service1 = Service.create(name: 'Fuel Service', description: 'Aircraft is refuled with jet fuel')
service2 = Service.create(name: 'Towing Service', description: 'Towing service to hangar from ramp and from hangar to ramp')
service3 = Service.create(name: 'Overnight Hangar', description: 'Overnight hangar rental for aircraft')
service4 = Service.create(name: 'Lav Service', description: 'cleaning toilet waist from aircraft')
service5 = Service.create(name: 'Food Catering', description: 'Order food to be ready when they depart')

aircraft1 = Aircraft.create(model: 'Gulfstream IV, 450', customer: customer1)
aircraft2 = Aircraft.create(model: 'Challenger 600', customer: customer2)
aircraft3 = Aircraft.create(model: 'Gulfstream V, 550', customer: customer3)
aircraft4 = Aircraft.create(model: 'Citation 560 XL', customer: customer3)

today = Date.today
date1 = today + 1
date2 = today + 2
date3 = today + 3
date4 = today + 4
date5 = today

workorder1 = Workorder.create(customer: customer1 , aircraft: aircraft1 , date: date1 , arrivingToday: false )
workorder2 = Workorder.create(customer: customer2 , aircraft: aircraft2 , date: date2 , arrivingToday: false)
workorder3 = Workorder.create(customer: customer3 , aircraft: aircraft3 , date: date3 , arrivingToday: false)
workorder4 = Workorder.create(customer: customer3 , aircraft: aircraft4 , date: date5 , completed: true)

workorder5 = Workorder.create(customer: customer4 , aircraft: aircraft1 , date: today , arrivingToday: true)
workorder6 = Workorder.create(customer: customer5 , aircraft: aircraft2 , date: today , arrivingToday: true)
workorder7 = Workorder.create(customer: customer5 , aircraft: aircraft3 , date: today , arrivingToday: true)
workorder8 = Workorder.create(customer: customer6 , aircraft: aircraft4 , date: today , arrivingToday: true)

serviceItem1 = ServiceItem.create(service: service1 , workorder: workorder1)
serviceItem2 = ServiceItem.create(service: service2 , workorder: workorder1)
serviceItem3 = ServiceItem.create(service: service4 , workorder: workorder2)
serviceItem4 = ServiceItem.create(service: service5 , workorder: workorder2)
serviceItem5 = ServiceItem.create(service: service3 , workorder: workorder3)
serviceItem6 = ServiceItem.create(service: service1 , workorder: workorder3)
serviceItem7 = ServiceItem.create(service: service2 , workorder: workorder4)
serviceItem8 = ServiceItem.create(service: service4 , workorder: workorder4)

serviceItem9 = ServiceItem.create(service: service1 , workorder: workorder5)
serviceItem10 = ServiceItem.create(service: service2 , workorder: workorder5)
serviceItem11 = ServiceItem.create(service: service4 , workorder: workorder6)
serviceItem12 = ServiceItem.create(service: service5 , workorder: workorder6)
serviceItem13 = ServiceItem.create(service: service3 , workorder: workorder7)
serviceItem14 = ServiceItem.create(service: service1 , workorder: workorder7)
serviceItem15 = ServiceItem.create(service: service2 , workorder: workorder8)
serviceItem16 = ServiceItem.create(service: service4 , workorder: workorder8)