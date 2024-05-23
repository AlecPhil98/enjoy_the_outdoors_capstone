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

    mountainDropDown.addEventListener("change", displayMountatinCard)

}



function displayMountatinCard(event) {

    // holds where the mountain cards will be held
    let mountainDiv = document.querySelector("#mountainsCards")

    // clears out the previous mountain information 
    mountainDiv.innerHTML = ""

    let mountain = mountainsArray.find((mountain) => mountain.name === event.target.value);

    //create card div and add its classes 
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25");

    // creates the timag and set it properties 
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "card-img-fit");

    //add the source to the images 
    cardImage.src = `./images/${mountain.img}`
    console.log(cardImage)
    cardImage.alt = mountain.name;

    // add the image and the cardDiv 
    cardDiv.appendChild(cardImage);

    // create the card body and add its classes 
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // lets create the card title 
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.innerHTML = mountain.name;

    // set the pet name as the card body 
    cardBody.appendChild(cardTitle);

    // create the p tag for the card details 
    let cardText = document.createElement("p");
    cardTitle.classList.add("card-text");

    cardText.innerHTML = `
    ${mountain.desc} 
    `
    // add the cardText to the cardBody
    cardBody.appendChild(cardText)

    // add the card body to card div 
    cardDiv.appendChild(cardBody)

    mountainDiv.appendChild(cardDiv)



}

function initmountainDropDown() {
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
        newOption.value = peak.name;

        // set the textContent
        newOption.textContent = peak.name;

        mountainDropDown.appendChild(newOption);


    })


}



