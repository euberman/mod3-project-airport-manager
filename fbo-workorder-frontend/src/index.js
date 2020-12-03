const BASE_URL = "http://localhost:3000"
let mainContainer;
let activeWorkorder;
// ========================================================================

document.addEventListener("DOMContentLoaded", () => {
  mainContainer = document.querySelector('main');
  fetchWorkorders()
});

// ========================================================================
// WORKORDERS
function fectchWorkorders(){
  fetch()
  const configObject = { method: "PATCH", headers: {"Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(dog) };
	    fetch(`${BASE_URL}/workorders`, configObject)
	      .then(resp => resp.json())
	      .then(renderWorkorders)
}
function renderWorkorders(workorders){
  mainContainer.innerHTML = "";
	workorders.forEach(workorder => renderWorkorder(workorder));
}

function renderWorkorder(workorder){
  
}

// ========================================================================
// HANGARS
function fetchHangars(){


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
