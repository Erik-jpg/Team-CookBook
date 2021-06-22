const mealArray = ['breakfast', 'snack', 'salad', 'appetizer', 'main course'];
const cuisineArray = ['italian', 'french', 'spanish', 'mexican', 'chinese', 'japanese', 'thai', 'vietnamese', 'indian'];
const dietArray = ['vegetarian', 'vegan', 'ketogenic', 'paleo', 'gluten-free'];

// var breakfast = document.querySelector("#breakfast")
// var snack = document.querySelector("#snack")
// var salad = document.querySelector("#salad")
// var appetizer = document.querySelector("#appetizer")
// var mainCourse = document.querySelector("#main-course")
// var italian = document.querySelector("#italian")
// var french = document.querySelector("#french")
// var spanish = document.querySelector("#spanish")
// var mexican = document.querySelector("#mexican")
// var chinese = document.querySelector("#chinese")
// var japanese = document.querySelector("#japanese")
// var thai = document.querySelector("#thai")
// var vietnamese = document.querySelector("#vietnamese")
// var indian = document.querySelector("#indian")
// var vegetarian = document.querySelector("#vegetarian")
// var vegan = document.querySelector("#vegan")
// var ketogenic = document.querySelector("#ketogenic")
// var paleo = document.querySelector("#paleo")
// var glutenFree = document.querySelector("#gluten-free")

// After a user searches for a recipe based on the ingredients at hand, the user will be able to filter based on meal type, cuisine type, and diet using the fetched API. 

const getUrl = "https://api.spoonacular.com/recipes/cuisine?apiKey=69de1083cd38422794fcdbf413bf552d"


fetch(getUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
})
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    });


// Default "filter" displays all results
// When a user clicks on their chosen filter, the button stays active until user unclicks. 
const buttonContainer = document.querySelector(".container");  
const buttons = document.getElementsByClassName("button");

function filterSelection() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    }
}

// If chosen button is active, filter through chosen array type and check if each object matches true or false.
function getFilterType(){
    if (current == filterSelection()); {
        const mealType = mealArray.filter(getFilterType => mealArray === true);
        const cuisineType = cuisineArray.filter(getFilterType => cuisineArray === true);
        const dietType = dietArray.filter(getFilterType => dietArray === true);
    } (current == document.querySelector("#show-all"))
}

// Display results for specified active button