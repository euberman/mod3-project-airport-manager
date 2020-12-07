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