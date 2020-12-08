const BASE_URL = "http://localhost:3000"
/* const _headers = {"Access-Control-Allow-Origin":"http://localhost:8000/",  "Content-Type": "application/json", Accept: "application/json" } */
const _headers = {"Content-Type": "application/json", Accept: "application/json"} //'Access-Control-Allow-Origin', 
let mainContainer;
let activeWorkorder;
// ========================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    mainContainer = document.getElementById('main-container')
    fetchWorkorders()
    linkNavButtons()
    showDashboard()
    fetchServiceItems()
    fetchCustomers()
    fetchServices()
});

function linkNavButtons(){
  const dashboardBtn = document.getElementById('dashboardLink')
    dashboardBtn.addEventListener('click', showDashboard)
  const workordersBtn = document.getElementById('workordersLink')
    workordersBtn.addEventListener('click', showWorkordersList)
  const servicesBtn = document.getElementById('servicesLink')
    servicesBtn.addEventListener('click', showServicesList)
  const customersBtn = document.getElementById('customersLink')
    customersBtn.addEventListener('click', showCustomersList)
}
// ========================================================================
// DASHBOARD
function showDashboard(){
    mainContainer.innerHTML = '';
    mainContainer.innerHTML = dashboardHTML;

    const arrivalListContainer = document.getElementById('arrivalListContainer');
    const arrivalList = document.createElement('ol')

    console.dir(workordersCollection)

    let arrivalFlights = workordersCollection.filter(workorder => { 
      return workorder["attributes"].arrivingToday
    })

    if (arrivalFlights.length > 0){
      arrivalListContainer.appendChild(arrivalList)
      arrivalFlights.forEach(flight => {
        let listItem = document.createElement('li')
        let arrivalDate = convertISODatetoLocal(flight.date)
        listItem.innerHTML = `<div class="level p-4 ">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
            <strong>Customer:</strong> ${flight['attributes']['customer'].name} <br>
            <strong>Aircraft Model: </strong> ${flight['attributes']['aircraft'].model}
            </p>
          </div>
        </div>
    </div>
              `;
        arrivalList.appendChild(listItem)
        listItem.addEventListener('click', function(e){
          showWorkorderDetails(flight)
        })
      })
      
    } else {
      arrivalListContainer.innerHTML = '<p>No Flight Arriving Today</p>'
    }
}

function convertISODatetoLocal(date){
  let d = Date.parse(date)
  let b = new Date(d)
  return b.toLocaleString();
}

function renderListChildren(parent, ...items) {
  const ul = document.createElement('ul')
  for (const [i, val] of listItems) {
    let li = document.createElement('li')
    li.innerHTML = `<strong>Customer:</strong>`
    ul.appendChild(li)
    li.addEventListener('click', function(e){
      showWorkorderDetails(val)
    })
  }
  return parent.appendChild(ul);
}

// ========================================================================

// ========================================================================
