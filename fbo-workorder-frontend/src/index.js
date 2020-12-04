const BASE_URL = "http://localhost:3000"
const _headers = { 'Access-Control-Allow-Origin', "Content-Type": "application/json", Accept: "application/json" }
let mainContainer;
let activeWorkorder;
// ========================================================================

document.addEventListener("DOMContentLoaded", () => {
  mainContainer = document.getElementById('main-container')
  fetchWorkorders()
  linkNavButtons()
});

function linkNavButtons(){
  const dashboardBtn = document.getElementById('dashboardLink')
    dashboardBtn.addEventListener('click', renderDashboard)
  const workordersBtn = document.getElementById('workordersLink')
  workordersBtn.addEventListener('click', renderWorkorders)
  const servicesBtn = document.getElementById('servicesLink')
  servicesBtn.addEventListener('click', renderServices)
  const customersBtn = document.getElementById('customersLink')
  customersBtn.addEventListener('click', renderCustomers)
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
                <div class="message-header"> Chart </div>
                <div class="message-body" style="position: relative;"></div>
              </article>
            </div>
      </div>
    `;
  mainContainer.append(dashboardTemplate);

}

// ========================================================================
// WORKORDERS
function fectchWorkorders(){
  fetch(`${BASE_URL}/workorders`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(renderWorkorders)
}
function renderWorkorders(workorders){
  parentContainer.innerHTML = "<ul class='row'></ul>";
	workorders.forEach(workorder => renderWorkorder(workorder))
}

function renderWorkorder(workorder){
  const listItem = document.createElement('li')
  const editBtn = document.createElement("button")
  const workorderList = document.querySelector('section.parentContainer ul')
  editBtn.innerText = "Edit";
  listItem.innerHTML = `${workorder.date} <br> ${workorder.customer.name} <br> ${workorder.aircraft.model}`;
  listItem.append(editBtn);
  listItem.className = 'col-2 correct'
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

// ========================================================================
// CUSTOMERS

// ========================================================================
// SERVICES

// ========================================================================

// ========================================================================

/*
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector();			// returns first element
document.querySelectorAll();		// returns NodeList
*/
