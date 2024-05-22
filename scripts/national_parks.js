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



    initParkLocationsDroopdown();



}


function initParkLocationsDroopdown() {

    let parkLocationsDropdown = document.querySelector("#parkSelect");
    // create the element for the default option 
    let defaultOption = document.createElement("option");
    // This is the value of the selected value 
    defaultOption.value = "";
    // This is what is displayed in the dropdown 
    defaultOption.textContent = "Select A Park Loacation";
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