const BASE_URL = "http://localhost:3000"
/* const _headers = {"Access-Control-Allow-Origin":"http://localhost:8000/",  "Content-Type": "application/json", Accept: "application/json" } */
const _headers = {"Content-Type": "application/json", Accept: "application/json"} //'Access-Control-Allow-Origin', 
let mainContainer;
let activeWorkorder;
// ========================================================================

document.addEventListener("DOMContentLoaded", () => {
  mainContainer = document.getElementById('main-container')
  showDashboard()
  // fetchWorkorders()
  linkNavButtons()
  fetchWorkorders()
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
  
  mainContainer.innerHTML = dashboardTemplate;
}

// ========================================================================

// ========================================================================
