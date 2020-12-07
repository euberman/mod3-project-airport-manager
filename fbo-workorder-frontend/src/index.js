const BASE_URL = "http://localhost:3000"
/* const _headers = {"Access-Control-Allow-Origin":"http://localhost:8000/",  "Content-Type": "application/json", Accept: "application/json" } */
const _headers = {"Content-Type": "application/json"} //'Access-Control-Allow-Origin', 
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
  let dashboardTemplate = `
      <div class="level mt-2 mr-2 content-title"><div class="level-left"><div class="level-item title">Dashboard</div></div></div>
      <div class="columns is-multiline">
            <div class="column"><div class="box notification is-primary"><div class="heading">Hangars Available</div><div class="title">56,950</div></div></div>
            <div class="column"><div class="box notification is-warning"><div class="heading">Revenue / Expenses</div><div class="title">55% / 45%</div></div></div>
            <div class="column"><div class="box notification is-info"><div class="heading">Feedback Activity</div><div class="title">78% ↑</div></div></div>
            <div class="column"><div class="box notification is-danger"><div class="heading">Orders / Returns</div><div class="title">75% / 25%</div></div></div>    
      </div> 
      <div class="columns is-multiline">
            <div class="column is-12">
              <article class="message is-dark">
                <div class="message-header"> Dash </div>
                <div id="messageBody" class="message-body" style="position: relative;">
                
                </div>
              </article>
            </div>
      </div>
    `;
  mainContainer.innerHTML = dashboardTemplate;
}

// ========================================================================

// ========================================================================
