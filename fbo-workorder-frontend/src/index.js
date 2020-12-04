const BASE_URL = "http://localhost:3000"
const _headers = { 'Access-Control-Allow-Origin', "Content-Type": "application/json", Accept: "application/json" }
let parentContainer;
let activeWorkorder;
// ========================================================================

document.addEventListener("DOMContentLoaded", () => {
  parentContainer = document.getElementById('parentContainer')
  fetchWorkorders()
  linkNavButtons()
});

function linkNavButtons(){
  const dashboardBtn = document.getElementById('dashboardLink')
    dashboardBtn.addEventListener('click', renderDashboard)
  const workordersBtn = document.getElementById('workordersLink')
  workordersBtn.addEventListener('click', renderDashboard)
  const servicesBtn = document.getElementById('servicesLink')
  servicesBtn.addEventListener('click', renderDashboard)
  const customersBtn = document.getElementById('customersLink')
  customersBtn.addEventListener('click', renderDashboard)
}
// ========================================================================
// DASHBOARD
function renderDashboard(){
  parentContainer.innerHTML = '';

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
