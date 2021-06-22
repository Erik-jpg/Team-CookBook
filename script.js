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
