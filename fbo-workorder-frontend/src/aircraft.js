// ========================================================================
// AIRCRAFTS

let aircraftNameList = ['Challenger 300', 'Challenger 600', 'Citation 560 XL', 'Falcon 50 ', 'Gulfstream IV, 450', 'Gulfstream V, 550', 'Hawker 400']
let aircraftsCollection = []

function fetchAircrafts(){
  fetch(`${BASE_URL}/aircrafts`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(json => {
      console.dir(json.data)
      aircraftsCollection = json.data
    })
}

function renderAircrafts(){

}
function renderAircraft(){

}