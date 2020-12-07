// ========================================================================
// CUSTOMERS

//  fetch(`${BASE_URL}/customers`, configObject)
//     .then(resp => resp.json())
//     .then(json => {
//       console.log('json[data]')
//       console.dir(json['data']);
//       console.log('json[data][0][attributes]')
//       console.dir(json['data'][0]['attributes']);
//       console.log('json[data][0][attributes][name]')
//       console.dir(json['data'][0]['attributes']['name']);
//     })

// easy customers reference
let customersCollection = []


function fetchCustomers(){
  fetch(`${BASE_URL}/customers`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(json => {
      console.dir(json.data)
      customersCollection = json.data
    })
}

function showCustomersList(){

}
function renderCustomer(){

}

class Customer {
  constructor(id, name, aircrafts, serverUrl = `$BASE_URL`){
    this._id = id
    this._name = name
    this._aircrafts = aircrafts
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  set name(newName){
    this._name = newName;
  }

  fetchCustomers(){
    fetch(`${BASE_URL}/customers`, { method: "GET", headers: _headers})
      .then(resp => resp.json())
      .then(json => {
        return json;
      })
  }

  save(data){
    const configObject = { method: "POST", mode:"cors", headers: _headers, body: JSON.stringify(data)}
    fetch(`${BASE_URL}/customers`, configObject)
      .then(resp => resp.json())
      .then(json => {
        alert('Customer was successfully saved')
        console.dir(json);
        renderWorkorders(json["data"])
      })
  }

  update(data){
    const configObject = { method: "PATCH", mode:"cors", headers: _headers, body: JSON.stringify(data)}
    fetch(`${BASE_URL}/customers/${currentCustomerId}`, configObject)
      .then(resp => resp.json())
      .then(json => {
        alert('Customer was updated successfully')
        console.dir(json);
        renderWorkorders(json["data"])
      })
  }

  
}