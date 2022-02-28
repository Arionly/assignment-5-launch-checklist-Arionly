// Write your JavaScript code here!

 const scriptHelper = require ("./scriptHelper");
//const pilot = document.getElementById('pilotName');
//const copilot = document.getElementsByName('copilotName');
//const fuelLevel = document.getElementsByName('fuelLevel');
//const cargoLevel = document.getElementsByName('cargoMass');
//const document = document.getElementById('launchForm');
//const list = document.getElementById('missionTarget');
// error data-testid="testForm"


window.addEventListener("load", function(event) {
    //validate form
    scriptHelper.validateInput();
    event.preventDefault();        
    console.log("form prevented from loading");
//submit form
    
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

