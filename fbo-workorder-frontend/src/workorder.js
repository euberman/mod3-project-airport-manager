// ========================================================================
// WORKORDERS

let currentWorkorderId = 0;
let workordersCollection;

/* ================================================================= */
/* Database methods ------------------------------------------------ */
/* ================================================================= */
function fetchWorkorders(){
  fetch(`${BASE_URL}/workorders`, { method: "GET", headers: _headers})
    .then(resp => resp.json())
    .then(json => {
      let data = json.data;
      console.dir(data)
      workordersCollection = data;
    })
}

function saveWorkorder(data){
  const config = { method: "POST", headers: _headers, body: JSON.stringify(data) }
  fetch(BASE_URL + '/workorders', config)
    .then(resp => resp.json())
    .then(json => {
      let newData = json.data;
      console.log('New Workorder was saved')
      console.dir(newData)
    })
  fetchWorkorders()
}

function updateWorkorder(data){
  const config = { method: "PATCH", headers: _headers, body: JSON.stringify(data) }
  fetch(BASE_URL + '/workorders/' + currentWorkorderId, config)
    .then(resp => resp.json())
    .then(json => {
      let newData = json.data;
      console.log('Workorder was updated')
      console.dir(newData)
    })
  fetchWorkorders()
}

function deleteWorkorder(){
  fetch(BASE_URL + '/workorders/' + currentWorkorderId, {
    method: "DELETE", 
    headers: {"Content-Type": "application/json"}
  })
  console.log("deleted from db")
  fetchWorkorders()
  showWorkordersList()
}

/* ================================================================= */
/* Render methods -------------------------------------------------- */
/* ================================================================= */
function showWorkordersList(){
    //const workorders = workordersCollection
    currentWorkorderId = 0
    mainContainer.innerHTML = '';
    console.dir(workordersCollection)

    let titleName = 'Workorders';
    let titleDiv = document.createElement('div')
    titleDiv.classList.add("level", "mt-2", "mr-2", "content-title")
    titleDiv.innerHTML = `<div class="level-left">
                            <div class="level-item title">${titleName}</div>
                          </div>`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'columns';
    contentDiv.innerHTML = `<div class="column is-12">
                              <article class="message is-dark">
                                <div class="message-header"> </div>
                                <div id="messageBody" class="message-body" style="position: relative;">
                                    <table class="table is-fullwidth is-striped">
                                        <tbody id="workordersTableBody"></tbody>
                                    </table>
                                </div>
                              </article>
                            </div> `;
      mainContainer.append(titleDiv)
      mainContainer.append(contentDiv)
    const tBody = document.getElementById('workordersTableBody');
    workordersCollection.forEach(workorder => renderWorkorderListItem(workorder, tBody))
}

function renderWorkorderListItem(workorder, tBody){
    const tableRow = document.createElement('tr')
    const viewBtn = document.createElement("button")
          viewBtn.innerText = "View";
          viewBtn.classList.add("button", "is-active");
          viewBtn.setAttribute('data-id', workorder.id);
    const editBtn = document.createElement("button")
          editBtn.innerText = "Edit";
          editBtn.classList.add("button", "is-active");
          editBtn.setAttribute('data-id', workorder.id);

    tableRow.innerHTML = `<td>${workorder["attributes"].date}</td>` +
                        `<td>${workorder["attributes"].customer.name}</td>` +
                        `<td>${workorder["attributes"].aircraft.model}</td>`;

    tableRow.addEventListener("click", function(event) {
      showWorkorderDetails(workorder)
    });

    // viewBtn.addEventListener("click", function(event) {
    //   showWorkorderDetails(workorder)
    // });

    tBody.append(tableRow);
}

function showWorkorderDetails(workorder){
    currentWorkorderId = workorder.id;
    mainContainer.innerHTML = " "
    mainContainer.innerHTML = workorderDetailsHTML

    const arrivalText = document.getElementById('woArrivalDate')
          arrivalText.innerHTML = `<strong>Arrival Date:</strong> ${workorder.date}<br><br>`

    const customerInfoText = document.getElementById('woCustomerInfo');
    customerInfoText.innerHTML = `Customer Id : ${workorder['attributes']['customer'].id}<br>
                          Customer Name : ${workorder['attributes']['customer'].name}`;

    const aircraftText = document.getElementById('woAircraftInfo');
    aircraftText.innerHTML = `Model : ${workorder['attributes']['aircraft'].model}`
    
    const editBtn = document.getElementById('woEditBtn');
    editBtn.addEventListener("click", function(event) {
      currentWorkorderId = workorder.id;
      renderWorkorderForm(workorder)
    });
    const deleteBtn = document.getElementById('woDeleteBtn');
    deleteBtn.addEventListener("click", function(event) {
      currentWorkorderId = workorder.id;
      console.log(`workorder-id = ${currentWorkorderId}`)
      renderWorkorderForm(workorder)
    });
}



/* ================================================================= */
/* Form methods ---------------------------------------------------- */
/* ================================================================= */
function renderWorkorderForm(workorder){
  mainContainer.innerHTML = " ";
  if (workorder) {
    currentWorkorderId = workorder.id
  }
  const parentTileDiv = document.createElement('div')
        parentTileDiv.classList.add("tile", "is-ancestor")
  const tileDiv = document.createElement('div')
        tileDiv.classList.add("tile")
  const form = document.createElement('form');
        form.id = 'workorderForm';
        form.innerHTML = workorderFormHTML;
        form.style = "width:100%;"
  tileDiv.appendChild(form)
  parentTileDiv.appendChild(tileDiv)
  mainContainer.appendChild(parentTileDiv)
  //mainContainer.appendChild(form);

  updateCustomerOptions(workorder)
}

function updateCustomerOptions(workorder){
    const selectField = document.getElementById('customerId');
    customersCollection.forEach(customer => {
      let option = new Option(customer['attributes'].name , customer.id);
      selectField.options.add(option);
    })
    console.log('selectField was updated value:')
    console.dir(selectField.outerHTML)

    selectField.addEventListener('change', (event) => {
      const customerId = event.target.value
      updateAircraftOptions(customerId, workorder)
    });
}

function updateAircraftOptions(customerId, workorder){
    const selectField = document.getElementById('aircraftId');
    const customer = customersCollection.find(customer => customer.id === customerId)
    const aircrafts = customer["attributes"]["aircrafts"]

    aircrafts.forEach(aircraft => {
      let option = new Option(aircraft.model , aircraft.id);
      selectField.options.add(option);
    })
    console.log('selectField was updated value:')
    console.dir(selectField.outerHTML)
}

function handleWorkorderFormSubmit(e){
    e.preventDefault()
    const form = e.target;
    let data = {
      date : form.date.value,
      customer_id : form.customerId.value,
      aircraft_id : form.aircraftId.value,
      completed : form.completed.value
    }

    const configObject = { method: "PATCH", mode:"cors", headers: _headers, body: JSON.stringify(data)}
    fetch(`${BASE_URL}/workorders/${currentWorkorderId}`, configObject)
      .then(resp => resp.json())
      .then(json => {
        alert('Workorder was updated successfully')
        console.dir(json);
        showWorkordersList(json["data"])
      })
}

// function renderWorkorderForm(workorder){
//   const workorderForm = buildWorkorderForm(true);
//   workorderForm.setAttribute('id', 'workorderForm')
//   workorderForm.customerName.value = workorder['customer']['name'];
//   workorderForm.aircraftModel.value = workorder['aircraft']['model'];
//   const modal = doument.createElement('div');
//         modal.classList.add('modal');
//         modal.setAttribute('id', 'workorderFormModal')
//   const modalInnerBg = doument.createElement('div');
//         modalInnerBg.className = 'modal-background';
//   const modalCard = doument.createElement('div');
//         modalCard.className = 'modal-card';
//       const innerHeader = doument.createElement('header');
//             innerHeader.className = 'modal-card-head';
//       const innerSection = doument.createElement('section');
//             innerSection.className = 'modal-card-body';
//             innerSection.appendChild(workorderForm)
//       const innerFooter = doument.createElement('footer');
//             innerFooter.className = 'modal-card-foot';

//   modalCard.appendChild(innerHeader)
//   modalCard.appendChild(innerSection)
//   modalCard.appendChild(innerFooter)
//   modal.appendChild(modalInnerBg)
//   modal.appendChild(modalCard)
//   modal.classList.add('is-active');

//   workorderForm.addEventListener('submit', handleWorkorderFormSubmit )
//   mainContainer.append()
// }