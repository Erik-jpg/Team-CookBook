<<<<<<< HEAD
// console.log("hello world")
document.addEventListener('DoMContentLoaded', function() {});

const saveBtn = document.querySelector("#saveBtn");
const deleteBtn = document.querySelector(".is-danger");
const form = document.querySelector("#recipeName");
const form1 = document.querySelector("#recipeCards");
const h2 = document.querySelector("h2");
const userRecipes = document.querySelector("#userCookbook")
const getButton = document.querySelector(".is-link");
let recipe = {};
// const dataKey = document.getElementById("recipeName").value= recipe;
// const recipe_deserialized = JSON.stringify(localStorage.getItem('recipe', form));
// const recipe_serialized = JSON.stringify(localStorage.setItem('recipe', form));

// console.log(localStorage);
// function fillingCard() {
//   $(recipe).ready (function () {
//     $("saveBtn").on("click", populateCard );
// });
//     function populateCard() {
//         recipe.push({"ingredients":"flour, sugar, apples"});
//         };
        
console.log(saveBtn);
    
 
function handleRecipe() {
    for (let i = 0; len=localStorage.length; i<len) i++; {
        var key=localStorage.key(i);
            var value = localStorage[key];
            console.log(key + '=>' + value);
      }
    }
// console.log(recipeDisplayCheck());

// localStorage.setItem("recipe", JSON.stringify(recipe));

//what is the global approach? dataKey = name of recipe, ingredients = form input, retrieve recipes by key name.
function setRecipe (form1) {
  localStorage.setItem("recipe", JSON.stringify(recipe));  
}

function recipeDisplayCheck() {
  if (localStorage.getItem("recipe")!==null) {
    const recipe = localStorage.getItem("recipeName");
    userRecipes.value = "Your, " + recipe;
  }
}
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setRecipe();
    reset();
});

  //this was in the addEventListener: function(e)
//   console.log(recipeDisplayCheck());
//   localStorage.setItem(form.value, form1.value);  
// });

//Make another localStorage setItem "users recipes" save an array of user's recipes, can call up array with recipe names. When page loads, populate the array how you want them to see it, set array as buttons, that allow the user to select it (for loop to add buttons)
//save info of recipe use javascript to show. use for loop to match measurement ingredients

// Remove the stored name from web storage
deleteBtn.addEventListener("click", function (e) {
  localStorage.removeItem("recipe");
});
// Get recipe from localStorage
getButton.addEventListener("click", function recipeDisplayCheck() {
  if (localStorage.getItem("recipe")) {
    const recipe = localStorage.getItem("recipe");
    document.querySelector(userRecipes).value = "Your, " + form.value;
  }else{

  }
});
//Lets see if this generates a list 
var data = Object.assign({}, localStorage);
var archive = [];

function allStorage() {
      keys = Object.keys(localStorage),
      i = 0, key;

  for (key = keys[i]; i++;) {
      archive.push( key + '=' + localStorage.getItem(key));
  }
  return archive;
}

document.querySelector('#recipeCard0').innerText = archive;
const localStorage = archive[i];
for (let i = 0; i < archive.length; i++); {
  // return archive[i];
  };

// console.log(archive);
=======
var searchButton = document.querySelector("#search-button")
var searchText = document.querySelector("#search-text") 
var apiKey = "568b5f0eb0ba4b64bb8575454ae038bc" 
var archive= JSON.parse(window.localStorage.getItem("archive"))|| []; 

function getRecipe(event) {
    event.preventDefault()
    console.log(searchText.value)
    var recipeList = document.querySelector("#recipe-list")
    recipeList.innerHTML=""
    var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="+searchText.value+"&apiKey="+apiKey
    fetch(requestUrl)
    .then(function (response){
        return response.json();
    }) 
    .then(function(data) {
    console.log(data) 
    data.forEach(function(recipe){
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

        allIngredients.addEventListener("click", getAllIngredients )
        
        function getRecipeInstructions(){
            var instructionsUrl = "https://api.spoonacular.com/recipes/"+recipe.id+"/information?&apiKey=" + apiKey
            fetch(instructionsUrl) 
            .then(function(response) {
                return response.json()
            }) 
            .then(function(info) {
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

        function getAllIngredients () {
            var ingredientsUrl = "https://api.spoonacular.com/recipes/"+recipe.id+"/information?&apiKey="+ apiKey 
            fetch(ingredientsUrl)
            .then(function (response) {
                return response.json ()
            })
            .then(function(ing) {
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
        missedIngredients.forEach(function(ingredient){
            var recipeListMissedIng = document.createElement("h4") 

            recipeListMissedIng.classList = "has-text-primary-dark" 

            recipeListMissedIng.textContent = ingredient.name 

            recipeListBody.appendChild(recipeListMissedIng)            
        })
         
    }); 
    
    })
} 

searchButton.addEventListener("click", getRecipe)
>>>>>>> ce417e500fd2f1456d3dba15bb0cc99cb32ddd4b
