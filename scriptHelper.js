// Write your helper functions here!
const isomorphic = require ('isomorphic-fetch');
//const document = document.getElementById('launchForm');
const pilot = document.getElementById('pilotName');
const copilot = document.getElementsByName('copilotName');
const fuelLevel = document.getElementsByName('fuelLevel');
const cargoLevel = document.getElementsByName('cargoMass');
const list = document.getElementById('missionTarget');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  // let messages = [];
    if (pilot.textContent.trim === " " || pilot.textContent == null) {
       console.log('Text is required');
       return false;
        }
    else if (copilot.textContent.trim === " " || copilot.textContent == null) {
        console.log('Text is required');
        return false;
        }
    else if (fuelLevel.textContent.trim === " " || fuelLevel.textContent == isNaN){
        console.log('Numeric data is required');
        return false;
        }
    else if (cargoLevel.textContent.trim === " " || cargoLevel.textContent == isNaN){
        console.log('Numeric data is required');
        return false;
        }
      else {
          return true;
        }
    }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports = {
    addDestinationInfo = addDestinationInfo,
    validateInput = validateInput,
    formSubmission = formSubmission,
    pickPlanet = pickPlanet,
    myFetch = myFetch,
    }

