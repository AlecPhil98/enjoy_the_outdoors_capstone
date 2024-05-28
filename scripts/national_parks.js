"use strict"

window.onload = () => {

    // run the code that loads the drop downs
    initParkLocationsDropdown();
    // get the location drop down 
    let parkLocationsDropdown = document.querySelector("#parkSelect");
    // make sure we run the code to work with the nation park data 
    parkLocationsDropdown.addEventListener("change", getLocation);

    // run the park type dropdown
    inintParkTypeDropdown();
    let parkTypeDropdown = document.querySelector("#parkTypeOf")
    parkTypeDropdown.addEventListener("change", getParkTypeOf)


    let locationRadio = document.querySelector("#parkLocationRadio")
    let parkTypeRadio = document.querySelector("#parkTypeRadio")

    hideElement("#parkSelect");
    hideElement("#parkTypeOf");

    locationRadio.addEventListener("change", hideShowRadioDog)
    parkTypeRadio.addEventListener("change", hideShowRadioDog)

}

function hideShowRadioDog(event) {

    if (event.target.value === "typeOf") {
        showElement("#parkTypeOf");
        hideElement("#parkSelect");
    } else {
        showElement("#parkSelect");
        hideElement("#parkTypeOf");
    }
}


//This function will hide an HTML element on the page
//Just pass it the id of the element you want to hide
function hideElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "none";
}

//This function will show an HTML element on the page
//Just pass it the id of the element you want to show
function showElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "block";
}


// function for getting the body table for park location 
function getLocation(event) {
    // get the selected location drom the dropdown which is the event.target
    let selectedPark = event.target.value;

    // console.log(selectedPark)

    let matchingLocations = nationalParksArray.filter((nationalPark) => {

        return nationalPark.State === selectedPark;
    })

    let tablebody = document.querySelector("#nationalParkTableBody");

    tablebody.innerHTML = "";

    matchingLocations.forEach((nationalPark) => {

        buildTableRow(tablebody, nationalPark);

    })

}
// function for getting the body table for type of park 
function getParkTypeOf(event) {

    let selectedParkType = event.target.value

    let matchingParkType = nationalParksArray.filter((parkType) => {

        return parkType.LocationName.toLowerCase().indexOf(selectedParkType.toLowerCase()) !== -1;

    })

    let tablebody = document.querySelector("#nationalParkTableBody");

    tablebody.innerHTML = "";

    matchingParkType.forEach((parkType) => {

        buildTableRow(tablebody, parkType)


    })

}

// function for building the body table for park location search
function buildTableRow(tablebody, data) {
    // create the row to create th data
    let newRow = tablebody.insertRow();

    // loop over alll the properties in the objext and create a cell for them 
    for (let property in data) {

        if (property === "Location" || property === "Visit") {

            continue
        }

        let newTd = newRow.insertCell();
        newTd.innerText = data[property];

    }

    let newTd = newRow.insertCell();
    newTd.innerText = (data.Visit) ? data.Visit : "N/a";
}

// function for building the body table for park type search using normal 
// function buildTypeOfTableRow(typeOFTableBody, parkType) {

//     let newTypeRow = typeOFTableBody.insertRow();

//     let cell1 = newTypeRow();
//     cell1.innerHTML = parkType.LocationID;

//     let cell2 = newTypeRow();
//     cell2.innerHTML = parkType.LocationName;


//     let cell3 = newTypeRow();
//     cell3.innerHTML = parkType.Address;


//     let cell4 = newTypeRow();
//     cell4.innerHTML = parkType.City;


//     let cell5 = newTypeRow();
//     cell5.innerHTML = parkType.State;


//     let cell6 = newTypeRow();
//     cell6.innerHTML = parkType.ZipCode;


//     let cell7 = newTypeRow();
//     cell7.innerHTML = parkType.Phone;

//     let cell8 = newTypeRow();
//     cell8.innerHTML = parkType.Fax;


//     let cell9 = newTypeRow();
//     cell9.innerHTML = parkType.URL;



// }

function initParkLocationsDropdown() {

    let parkLocationsDropdown = document.querySelector("#parkSelect");
    // create the element for the default option 
    let defaultOption = document.createElement("option");

    // This is the value of the selected value 
    defaultOption.value = "";

    // This is what is displayed in the dropdown 
    defaultOption.textContent = "Select A Park Location";

    // add the option we created to the dropdown
    parkLocationsDropdown.appendChild(defaultOption);

    // write a loop to work with each indivduial category and build an option for it 
    locationsArray.forEach((location) => {

        // create  new option to the dropdown 
        let newOption = document.createElement("option");

        // set the value for the option 
        newOption.value = location;

        // set the textContent
        newOption.textContent = location;

        parkLocationsDropdown.appendChild(newOption);


    })
}

function inintParkTypeDropdown() {
    let parkTypeDropdown = document.querySelector("#parkTypeOf");

    // create the element for the default option 
    let defaultOption = document.createElement("option");

    // This is the value of the selected value 
    defaultOption.value = "";

    // This is what is displayed in the dropdown 
    defaultOption.textContent = "Select A Park Type";

    // add the option we created to the dropdown
    parkTypeDropdown.appendChild(defaultOption);

    parkTypesArray.forEach((parkLocation) => {

        let newParkTypeOption = document.createElement("option");

        newParkTypeOption.value = parkLocation;

        newParkTypeOption.textContent = parkLocation;

        parkTypeDropdown.appendChild(newParkTypeOption);


    })

}

function getParkType(nationalParksArray, LocationName) {

    let matching = [];

    let numItems = nationalParksArray.length

    for (let i = 0; i < numItems; i++) {

        if (nationalParksArray[i].LocationID === LocationName) {
            matching.push(nationalParksArray[i]);
        }
    }
    return matching;

}


function getNationalParkInLoactions(nationalParksArray, State) {

    let matching = [];

    let numItems = nationalParksArray.length;

    for (let i = 0; i < numItems; i++) {

        if (nationalParksArray[i].State === State) {
            matching.push(nationalParksArray[i]);
        }
    }
    return matching;
}