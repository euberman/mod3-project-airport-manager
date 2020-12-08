/*
Parent Container =>
    <div id="main-container" class="column main py-4 has-background-grey-light">
                  <!-- AREA FOR RENDERING-->
    </div> <!-- END RIGHT SIDE COLUMN -->

`
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">One</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Two</p>
          </div>
        </div>
      </div>`;
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Workorder Details
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const workorderDetailsHTML = `
      <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
              <div class="tile is-child box">
                  <div class="level">
                      <div class="level-left">
                        <div class="level-item">
                          <p class="subtitle is-5">
                            <strong>Workorder Details:</strong>
                          </p>
                        </div>
                      </div>
                    
                      <div class="level-right">
                        <p class="level-item"><button id="woEditBtn" class="button is-success">Edit</button></p>
                        <p class="level-item"><button id="woDeleteBtn" class="button is-success">Delete</button></p>
                      </div>
                  </div> 
              </div>
              <div class="tile is-child box">
                <p id="woArrivalDate">
                    
                </p>
                <p>
                    <strong>Customer Information:</strong>
                </p>
                <p id="woCustomerInfo"> </p>
                <br>
                <p>
                    <strong>Aircraft Information:</strong>
                </p>
                <p id="woAircraftInfo"> </p>
              </div>
          </div>
      </div>`;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Workorder Form
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const workorderFormHTML = `
      <div class="field">
          <label for="arrivalDate" class="label">Arrival Date:</label>
          <div class="control">
            <input type="datetime-local" id="arrivalDate" name="arrivalDate" value="2020-12-08T11:00" min="2020-12-08T00:00" max="2021-12-31T00:00">
          </div>
      </div>
      <div class="field">
          <label for="customerId" class="label">Customer:</label>
          <div class="control">
              <div class="select">
                  <select id="customerId" name="customerId" size="9" multiple required>
                  </select>
              </div>
          </div>
      </div>

      <div class="field">
          <label for="aircraftId" class="label">Aircraft Model:</label>
          <div class="select">
              <select id="aircraftId" name="aircraftId" size="9" multiple required>
              </select>
          </div>
      </div>

      <div class="field">
          <label class="label">Hangar Location:</label>
          <div class="control">
            <div class="select">
                <select id="hangarId" name="hangarId">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
          </div>
      </div>

      <div class="field">
          <label class="checkbox"><input id="completed" type="checkbox" name="completed"/>Completed </label>
      </div>

      <div class="field is-grouped">
          <div class="control"><button id="submitBtn" class="button is-link">Submit</button></div>
          <div class="control"><button id="cancalBtn" class="button is-link is-light">Cancel</button></div>
      </div>`;


/*
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Customer Form
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const customerFormHTML = ``;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Workorder Form
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const serviceItemFormHTML = ``;




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Workorder
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const workorderFormHTML = ``;
*/