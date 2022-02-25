// Write your JavaScript code here!

const { formSubmission, formSubmission } = require("./scriptHelper");
//const pilotName = document.getElementById('pilotName');
//const copilotName = document.getElementsByName('copilotName');
//const fuelLevel = document.getElementsByName('fuelLevel');
//const cargoMass = document.getElementsByName('cargoMass');

// error data-testid="testForm"
window.addEventListener("load", function() {
    let formSubmission = this.document.querySelector("formSubmission");
    formSubmission.addEventListener("formSubmit", function(event){
        event.preventDefault()
    });

    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

}