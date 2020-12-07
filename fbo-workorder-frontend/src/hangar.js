/ ========================================================================
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