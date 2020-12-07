// ========================================================================
// WORKORDERS
function fetchWorkorders(){
  fetch(`${BASE_URL}/workorders`, { method: "GET", mode:"cors", headers: _headers})
    .then(resp => resp.json())
    .then(json => {
      let data = json["data"];
      renderWorkorders(data)
    })
}


function renderWorkorders(workorders){
    mainContainer.innerHTML = '';
    console.dir(workorders)
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
                                <div class="message-header"> Dash </div>
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
    workorders.forEach(workorder => renderWorkorder(workorder, tBody))
}

function renderWorkorder(workorder, tBody){
    const tableRow = document.createElement('tr')
    const editBtn = document.createElement("button")
    const workorderTable = document.getElementById('workordersTableBody')

    editBtn.innerText = "Edit";
    editBtn.classList.add("button", "is-active")
    editBtn.setAttribute('data-id', workorder.id)

    tableRow.innerHTML = `<td>${workorder["attributes"].date}</td>
                        <td>${workorder["attributes"].customer.name}</td>
                        <td>${workorder["attributes"].aircraft.model}</td>`;
    tableRow.append(editBtn);

    editBtn.addEventListener("click", function(event) {
        activeWorkorderId = workorder.id;
        console.log(`workorder-id = ${activeWorkorderId}`)
        renderWorkorderForm(workorder)
    });
    tBody.append(tableRow);
}


function renderWorkorderForm(workorder){
  mainContainer.innerHTML = " ";
  let form = buildWorkorderForm()
  currentWorkorderId = workorder.id;
  form.customerId.value = workorder['attributes']['customer'].id;
  form.aircraftId.value = workorder['attributes']['aircraft'].id;

  mainContainer.appendChild(form);
}

function getCustomers(){
  const configObject = { method: "GET", mode:"cors", headers: _headers}
  fetch(`${BASE_URL}/customers`, configObject)
    .then(resp => resp.json())
    .then(json => {
      let data = json["data"];
      console.log('Customer data')
      console.dir(data);
      // buildCustomerSelectField(data)
      return data;
    })
}


function buildCustomerSelectField(){
  const selectField = document.createElement('select');
  selectField.name = 'customerId';
  selectField.id = 'customerSelectField';
  let customers = getCustomers();
  // let customers = getCustomers();
  //     customers = customers.data;
  let selectFieldLiteral = `<select id="customerSelectField" name="customerId">`;

  for (let i = 0; i < customers.length; i++) {
    let customer = new Option(customers[i]["attributes"]["name"], customers[i].id);
    selectFieldLiteral += `<option value=${customers[i].id}>customers[i]["attributes"]["name"]</option>`;
    selectField.options.add(customer);
  }
  selectFieldLiteral += `</select>`;
  return selectFieldLiteral;
}


function buildWorkorderForm(){
    const form = document.createElement('form');
    let customerSelectField = buildCustomerSelectField();
    form.id = 'workorderForm';
    let formTemplate = `<div class="field">
      <label class="label">Customer Name:</label>
          <div class="control"><input class="input" name="customerName" type="text" placeholder="Customer Name" required></div>
      </div>

      <div class="field">
          <label class="label">Aircraft Model:</label>
          <div class="control"><input class="input" name="aircraftModel" type="email" placeholder="Aircraft Model" required></div>
      </div>

      <div lass="field">
          <label class="checkbox"><input type="checkbox"/>Completed </label>
      </div>` +
      `${ buildCustomerSelectField }` +
      `<div class="field">
          <label class="label">Hangar Location:</label>
          <div class="control">
            <div class="select">
            <select name="hangar_id">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            </div>
          </div>
      </div>

      <div class="field is-grouped">
      <div class="control"><button id="submitBtn" class="button is-link">Submit</button></div>
      <div class="control"><button id="cancalBtn" class="button is-link is-light">Cancel</button></div>
      </div>`;
    form.innerHTML = formTemplate;
    return form;
}


function handleWorkorderFormSubmit(e){
  e.preventDefault()
  const form = e.target;
  let data = new FormData(form);
  const configObject = { method: "PATCH", mode:"cors", headers: _headers, body: JSON.stringify(data)}
  fetch(`${BASE_URL}/workorders/${currentWorkorderId}`, configObject)
    .then(resp => resp.json())
    .then(json => {
      renderWorkorders(json["data"])
    })

  // const modal = document.querySelector('#workorderFormModal')
  // modal.classList.toggle('is-active')
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