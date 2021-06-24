
    // Create Dino Constructor
    function DinosaurData(species, weight, height, diet, where, when, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = require(`./images/${species.toLowerCase()}.png`);
    } 

    // Create Dino Objects

    let dinosaur = [];

    const dinoData = require('./dino.json')
    const dinoObject = dinoData.Dinos;
    dino = dinoObject.map( function (dinosaurData) {
        return new DinosaurData(dinosaurData.species, 
            dinosaurData.weight, 
            dinosaurData.height, 
            dinosaurData.diet, 
            dinosaurData.where, 
            dinosaurData.when, 
            dinosaurData.fact, 
            dinosaurData.image)
    });

    function HumanData(name, height, weight, diet, image) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.image = require('./images/human.png');
    }

    // Create Human Object
    
    let human = [];

    function HumanObject() {
        const humanName = document.getElementById('name').value;
        const humanFeet = document.getElementById('feet').value;
        const humanInches = document.getElementById('inches').value;
        const humanHeightInInches = (humanFeet * 12) + humanInches;
        const humanWeight = document.getElementById('weight').value;
        const humanDiet = document.getElementById('diet').value;

        return new HumanData(humanName, humanHeightInInches, humanWeight, humanDiet);
    }

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    const compareHeight = dinosaur => {
        const dinosaurHeight = JSON.stringify(dinosaur.height);
        const humanHeight = JSON.stringify(human.height);

        if (dinosaurHeight > humanHeight) {
            return `${dinosaur.species} is taller than you!`
        } else {
            return `You are taller than ${dinosaur.species}!`
        }
    }

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    const compareWeight = dinosaur => {
        const dinosaurWeight = JSON.stringify(dinosaur.weight);
        const humanWeight = JSON.stringify(human.weight);

        if (dinosaurWeight > humanWeight) {
            return `${dinosaur.species} weighs more than you!`
        } else {
            return `You weight more than a ${dinosaur.species}!`
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

    const compareDiet = dinosaur => {
        const dinosaurDiet = JSON.stringify(dinosaur.diet);
        const humanDiet = JSON.stringify(human.diet);

        if (dinosaurDiet !== humanDiet) {
            return `The ${dinosaur.species} prefers a ${dinosaur.diet} meal, while you prefer a ${human.diet} meal`
        } else {
            return `You and the ${dinosaur.species} prefer a ${dinosaur.diet} meal!`
        }
    }

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


    // On button click, prepare and display infographic
    const submitButton = () => {
        document.getElementById("btn").addEventListener("click", function() {
            document.getElementById('dino-compare').remove;
        })
    }

    submitButton();