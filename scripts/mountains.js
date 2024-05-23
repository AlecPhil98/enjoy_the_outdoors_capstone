"use strict"


window.onload = () => {

    /*
    You can remove the following console.log() lines.
    They are here to verify that we have access to the data
    The data script files are located in the scripts/data directory
*/

    //log the mountainsArray to the console (scripts/data/mountainData.js)
    console.log(mountainsArray)


    initmountainDropDown();

    let mountainDropDown = document.querySelector("#mountainDropDown")

    mountainDropDown.addEventListener("chnage",displayMountatinCard)

}



function displayMountatinCard(){


}

function initmountainDropDown(){
let mountainDropDown = document.querySelector("#mountainDropDown");
    // create the element for the default option 
    let defaultOption = document.createElement("option");

    // This is the value of the selected value 
    defaultOption.value = "";

    // This is what is displayed in the dropdown 
    defaultOption.textContent = "Select A Mountain";

    // add the option we created to the dropdown
    mountainDropDown.appendChild(defaultOption);

    // write a loop to work with each indivduial category and build an option for it 
    mountainsArray.forEach((peak) => {

        // create  new option to the dropdown 
        let newOption = document.createElement("option");

        // set the value for the option 
        newOption.value = peak;

        // set the textContent
        newOption.textContent = peak;

        mountainDropDown.appendChild(newOption);


    })


}



