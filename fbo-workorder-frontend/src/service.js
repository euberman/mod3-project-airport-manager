// ========================================================================
// SERVICES
let servicesCollection;


/* ================================================================= */
/* Database methods ------------------------------------------------ */
/* ================================================================= */
function showServicesList(){

}

function fetchServices(){
  fetch(`${BASE_URL}/services`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(json => {
      let data = json.data;
      console.dir(data)
      servicesCollection = data
    })
}
/* ================================================================= */
/* Render methods -------------------------------------------------- */
/* ================================================================= */
function renderHangars(){

}
function renderHangar(){

}