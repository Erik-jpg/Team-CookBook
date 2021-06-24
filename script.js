var searchButton = document.querySelector("#search-button")
var searchText = document.querySelector("#search-text")
var apiKey = "568b5f0eb0ba4b64bb8575454ae038bc"
var archive = JSON.parse(window.localStorage.getItem("archive")) || [];

function getRecipe(event) {
  event.preventDefault()
  console.log(searchText.value)
  var recipeList = document.querySelector("#recipe-list")
  recipeList.innerHTML = ""
  var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + searchText.value + "&apiKey=" + apiKey
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      data.forEach(function (recipe) {
        var recipeListCard = document.createElement("div")
        var recipeListBody = document.createElement("div")
        var recipeListPhoto = document.createElement("img")
        var recipeListTitle = document.createElement("h2")
        var recipeListMissingIngTitle = document.createElement("h3")
        var recipeInstructions = document.createElement("button")
        var allIngredients = document.createElement("button")
        var missedIngredients = recipe.missedIngredients

        recipeListCard.classlist = "card"
        recipeListBody.classList = "has-background-light"
        recipeListTitle.classList = "title"
        recipeInstructions.classList = "button"
        allIngredients.classList = "button"
        recipeListMissingIngTitle.classList = "subtitle"
        recipeListPhoto.classList = "box"

        recipeListPhoto.setAttribute("src", recipe.image)
        recipeInstructions.setAttribute("value", recipe.id)



        recipeList.appendChild(recipeListCard)
        recipeListCard.appendChild(recipeListBody)
        recipeListBody.appendChild(recipeListTitle)
        recipeListBody.appendChild(recipeListPhoto)
        recipeListBody.appendChild(recipeInstructions)
        recipeListBody.appendChild(allIngredients)
        recipeListBody.appendChild(recipeListMissingIngTitle)

        console.log('-------', recipe);
        recipeListTitle.textContent = `${recipe.title}`
        recipeListMissingIngTitle.textContent = "Other Ingredients You Will Need:"
        recipeInstructions.textContent = "Instructions"
        allIngredients.textContent = "All Ingredients"

        recipeInstructions.addEventListener("click", getRecipeInstructions)

        allIngredients.addEventListener("click", getAllIngredients)

        function getRecipeInstructions() {
          var instructionsUrl = "https://api.spoonacular.com/recipes/" + recipe.id + "/information?&apiKey=" + apiKey
          fetch(instructionsUrl)
            .then(function (response) {
              return response.json()
            })
            .then(function (info) {
              console.log(info)
              var cookingInstructions = document.createElement("h5")

              cookingInstructions.classList = "container"

              cookingInstructions.textContent = info.instructions

              recipeListBody.appendChild(cookingInstructions)

              console.log(info.instructions)

              if (info.instructions == "" || info.instructions === null) {
                alert("We're sorry, instructions are not available for this recipe")
              }
            })
        }

        function getAllIngredients() {
          var ingredientsUrl = "https://api.spoonacular.com/recipes/" + recipe.id + "/information?&apiKey=" + apiKey
          fetch(ingredientsUrl)
            .then(function (response) {
              return response.json()
            })
            .then(function (ing) {
              console.log(ing)
              var extendedIng = ing.extendedIngredients
              for (let i = 0; i < extendedIng.length; i++) {

                var specificIngredient = document.createElement("p")
                var unitMeasureNumber = document.createElement("h6")
                var unitMeasure = document.createElement("p")

                specificIngredient.classList = "container"
                unitMeasureNumber.classList = "container"
                unitMeasure.classList = "container"

                specificIngredient.textContent = extendedIng[i].name
                unitMeasureNumber.textContent = extendedIng[i].measures.us.amount
                unitMeasure.textContent = extendedIng[i].measures.us.unitLong

                recipeListBody.appendChild(unitMeasureNumber)
                unitMeasureNumber.appendChild(unitMeasure)
                unitMeasureNumber.appendChild(specificIngredient)


              }
            })

        }
        //console.log(recipe.missedIngredients[0].name)
        missedIngredients.forEach(function (ingredient) {
          var recipeListMissedIng = document.createElement("h4")

          recipeListMissedIng.classList = "has-text-primary-dark"

          recipeListMissedIng.textContent = ingredient.name

          recipeListBody.appendChild(recipeListMissedIng)
        })

      });

    })
}

searchButton.addEventListener("click", getRecipe)


const recipeName = document.querySelector("#recipeName");
const recipeCards = document.querySelector("#recipeCards");
const saveBtn = document.querySelector("#saveBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const getBtn = document.querySelector("#getBtn");
const userCookbook = document.querySelector("#userCookbook");



//to view stored items
for (var key in localStorage) {
  console.log(key, localStorage[key]);
  localStorage[key].value = document.querySelector("#userCookbook");
}
//save button
document.querySelector("#saveBtn").addEventListener("click", (e) => {
  handleRecipe();
  reset(recipeName, recipeCards);
  preventDefault();
});


function handleRecipe() {
  const recipeName = document.querySelector("#recipeName").value
  localStorage.setItem(recipeName, recipeCards.value);
}

//get button
document.querySelector("#getBtn").addEventListener("click", function () {
  printItem(recipeName.key, recipeCards.value);
});

function printItem(localStorage) {
  localStorage.getItem(recipeName.key, recipeCards.value).value =
    "userCookbook";
}
//to clear recipe entry
function reset() {
  (document.querySelector("#recipeName").value = ""),
  (document.querySelector("#recipeCards").value = "");
}
//to removeItem (delete)
document.querySelector("#deleteBtn").addEventListener("click", function (e) {
  deleteRecipe();
});

function deleteRecipe() {
  localStorage.removeItem(recipeName.key, recipeCards.value);
  document.querySelector("#cardHolder").value = recipeName.key;
  console.log(recipeName.key);
}

//a way to view stored recipes (need to make visual in html element)

for (var i = 0, len = localStorage.length; i < len; ++i) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
document.querySelector("#keyEntry").value = "Your saved recipes are: " + localStorage.key(i);

function preventDefault() {}

function recipeDisplayCheck() {
  if (localStorage.getItem("recipe") !== null) {
    const recipe = localStorage.getItem("recipeName");
    userRecipes.value = "Your, " + recipe;
  }
}