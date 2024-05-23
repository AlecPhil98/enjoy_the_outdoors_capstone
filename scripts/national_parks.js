"use strict"

window.onload = () => {

    /*
        You can remove the following console.log() lines.
        They are here to verify that we have access to the data
        The data script files are located in the scripts/data directory
    */

    //log the locationsArray to the console (scripts/data/locationData.js)
    console.log(locationsArray)

    //log the parkTypesArray to the console (scripts/data/parkTypeData.js)
    console.log(parkTypesArray)

    //log the nationalParksArray to the console (scripts/data/nationalParkData.js)
    console.log(nationalParksArray)


    // run the code that laodds the state location 
    initParkLocationsDropdown();
    // get the location drop down 
    let parkLocationsDropdown = document.querySelector("#parkSelect");
    // make sure we run the code to work with the nation park data 
    parkLocationsDropdown.addEventListener("change", getLocation);

}

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

function buildTableRow(tablebody, data) {
    // create the row to create th data
    let newRow = tablebody.insertRow();

    // loop over alll the properties in the objext and create a cell for them 
    for (let property in data) {

        let newTd = newRow.insertCell();
        newTd.innerText = data[property];
    }



}

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