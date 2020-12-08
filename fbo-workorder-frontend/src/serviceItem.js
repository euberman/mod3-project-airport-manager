// ========================================================================
// SERVICES
let serviceItemsCollection;


/* ================================================================= */
/* Database methods ------------------------------------------------ */
/* ================================================================= */
function showServiceItemsList(){

}

function fetchServiceItems(){
  fetch(`${BASE_URL}/service_items`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(json => {
      let data = json.data;
      console.dir(data)
      serviceItemsCollection = data
    })
}

function saveServiceItem(data){
  const configObject = { method: "POST", headers: _headers, body: JSON.stringify(data)}
  fetch(`${BASE_URL}/customers`, configObject)
    .then(resp => resp.json())
    .then(json => {
      console.log('ServiceItem was successfully saved')
      console.dir(json);
    })
}

function updateServiceItem(data){
  const configObject = { method: "PATCH", headers: _headers, body: JSON.stringify(data)}
  fetch(`${BASE_URL}/customers/${currentCustomerId}`, configObject)
    .then(resp => resp.json())
    .then(json => {
      console.log('ServiceItem was updated successfully')
      console.dir(json);
      renderWorkorders(json["data"])
    })
}

function deleteServiceItem(id){
  
}
/* ================================================================= */
/* Render methods -------------------------------------------------- */
/* ================================================================= */
