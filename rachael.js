const buttonContainer = document.querySelector(".container");  
const buttons = document.getElementsByClassName("button");

// Button stays highlighted after user makes selection, show all is default active
function filterSelection() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            console.log(current)
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    }
}
filterSelection();


// Get meal type from API url
const type = document.querySelector(".button type active")

const getTypeUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=69de1083cd38422794fcdbf413bf552d&type=${type}`

fetch(getTypeUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    })

// Get cuisine from API url
const cuisine = document.querySelector(".button cuisine active")

const getCuisineUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=69de1083cd38422794fcdbf413bf552d&cuisine=${cuisine}`

fetch(getCuisineUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    })

// Get diet from API url
const diet = document.querySelector(".button diet active")

const getDietUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=69de1083cd38422794fcdbf413bf552d&diet=${diet}`

fetch(getDietUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    })


