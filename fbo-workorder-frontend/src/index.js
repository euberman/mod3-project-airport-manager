const BASE_URL = "http://localhost:3000"
const _headers = {"Access-Control-Allow-Origin":"http://localhost:8000/",  "Content-Type": "application/json", Accept: "application/json" } //'Access-Control-Allow-Origin', 
let mainContainer;
let activeWorkorder;
// ========================================================================

document.addEventListener("DOMContentLoaded", () => {
  mainContainer = document.getElementById('main-container')
  renderDashboard()
  // fetchWorkorders()
  linkNavButtons()
});

function linkNavButtons(){
  const dashboardBtn = document.getElementById('dashboardLink')
    dashboardBtn.addEventListener('click', renderDashboard)
  const workordersBtn = document.getElementById('workordersLink')
  workordersBtn.addEventListener('click', fetchWorkorders)
  const servicesBtn = document.getElementById('servicesLink')
  servicesBtn.addEventListener('click', fetchServices)
  const customersBtn = document.getElementById('customersLink')
  customersBtn.addEventListener('click', fetchCustomers)
}
// ========================================================================
// DASHBOARD
function renderDashboard(){
  mainContainer.innerHTML = '';
  let dashboardTemplate = `
      <div class="level mt-2 mr-2 content-title"><div class="level-left"><div class="level-item title">Dashboard</div></div></div>
      <div class="columns is-multiline">
            <div class="column"><div class="box notification is-primary"><div class="heading">Top Seller Total</div><div class="title">56,950</div></div></div>
            <div class="column"><div class="box notification is-warning"><div class="heading">Revenue / Expenses</div><div class="title">55% / 45%</div></div></div>
            <div class="column"><div class="box notification is-info"><div class="heading">Feedback Activity</div><div class="title">78% ↑</div></div></div>
            <div class="column"><div class="box notification is-danger"><div class="heading">Orders / Returns</div><div class="title">75% / 25%</div></div></div>    
      </div> 
      <div class="columns is-multiline">
            <div class="column is-12">
              <article class="message is-dark">
                <div class="message-header"> Dash </div>
                <div id="messageBody" class="message-body" style="position: relative;"></div>
              </article>
            </div>
      </div>
    `;
  mainContainer.innerHTML = dashboardTemplate;
}

// ========================================================================
// WORKORDERS
function fetchWorkorders(){
  fetch(`${BASE_URL}/workorders`, { method: "GET", mode:"cors", headers: _headers})
    .then(resp => resp.json())
    .then(renderWorkorders)
}
function renderWorkorders(workorders){
  mainContainer.innerHTML = '';
  const titleDiv = document.createElement('div')
      titleDiv.className = 'level mt-2 mr-2 content-title'
  const titleDivInner1 = document.createElement('div')
  titleDiv.className = 'level-left'
  const titleDivInner2 = document.createElement('div')
  titleDiv.className = 'level-item title'

  let titleName = 'Workorders'

  mainContainer.innerHTML = `
      <div class="level mt-2 mr-2 content-title"><div class="level-left"><div class="level-item title">${titleName}</div></div></div>
      <div class="columns">
            <div class="column is-12">
              <article class="message is-dark">
                <div class="message-header"> Dash </div>
                <div id="messageBody" class="message-body" style="position: relative;">
                    <table class="table is-fullwidth is-striped">
                        <tbody id="workordersTableBody">
                        </tbody>
                    </table>
                </div>
              </article>
            </div>
      </div>
    `;
	workorders.data.forEach(workorder => renderWorkorder(workorder))
}

function renderWorkorder(workorder){
  const tableRow = document.createElement('tr')
  const editBtn = document.createElement("button")
  const workorderTable = document.querySelector('workordersTable')

  editBtn.innerText = "Edit";
  tableRow.innerHTML = `${workorder.date} <br> ${workorder.customer.name} <br> ${workorder.aircraft.model}`;
  tableRow.append(editBtn);

  editBtn.addEventListener("click", function(event) {
      activeWorkorder = workorder.id;
      workorderForm.name.value = workorder.name;
      workorderForm.breed.value = workorder.breed;
      workorderForm.sex.value = workorder.sex;
  });
}

// ========================================================================
// HANGARS
function fetchHangars(){
  fetch(`${BASE_URL}/hangars`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(renderWorkorders)
}
function renderHangars(){

}
function renderHangar(){

}

// ========================================================================
// AIRCRAFTS
function fetchAircrafts(){
  fetch(`${BASE_URL}/aircrafts`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(renderWorkorders)
}
function renderAircrafts(){

}
function renderAircraft(){

}
// ========================================================================
// CUSTOMERS
function fetchCustomers(){
  fetch(`${BASE_URL}/hangars`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(renderWorkorders)
}
function renderCustomers(){

}
function renderCustomer(){

}
// ========================================================================
// SERVICES
function fetchServices(){
  fetch(`${BASE_URL}/hangars`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(renderWorkorders)
}
function renderHangars(){

}
function renderHangar(){

}
// ========================================================================

// ========================================================================

/*
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector();			// returns first element
document.querySelectorAll();		// returns NodeList
*/
