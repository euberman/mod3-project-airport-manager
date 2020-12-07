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