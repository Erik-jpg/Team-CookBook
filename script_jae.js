

// $(".searchBox").submit(eventhandler);
// function eventhandler(event){
//  event.preventDefault();
  
//  var ingredientNotwant = document.getElementById("IngredientNotWantVal").value;
//  var ingredientWant = document.getElementById("IngredientWantVal").value
//  getRecipe(ingredientWant, ingredientNotwant)

// }


// function getRecipe(ingredientWant, ingredientNotWant){
//   console.log(ingredientWant);
//   // complex query
//   var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${ingredientWant}&intolerances=${ingredientNotWant}&number=2&apiKey=3e6d27e575b841e6a16c2b310b785c76`
//   fetch(apiUrl)
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
        
//         var divClassRemove = document.querySelectorAll('.divClass')
//         console.log("before", divClassRemove);
//         if(divClassRemove.length !== 0)
//         {divClassRemove[0].remove(divClassRemove);
//         divClassRemove[1].remove(divClassRemove);}
//         console.log("after", divClassRemove);
        

//         console.log(data.results.length);
//         for(var i=0; i < (data.results.length); i++)
//           createRecipeList(data.results[i], i);
//           recipeDetail
       
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
  
//   });
// }


// // Create recipe 
// function createRecipeList(result, index){
   
   
//     // resultEl = document.querySelector('#result');
    
//     divEl = document.createElement('div')
//     divEl.setAttribute('class', 'divClass');
//     divEl.setAttribute('id', `divid${index}`);

    
//     idNoEl = document.createElement('p');
//     idNoEl.setAttribute('class', 'idNoClass');
    
//     imgEl = document.createElement('img');
//     imgEl.setAttribute('class', 'imgClass');
    
//     titleEl = document.createElement('p');
//     titleEl.setAttribute('class', 'titleClass');

//     idNoEl.innerHTML = "ID : " + result.id;
//     imgEl.src = result.image;
//     titleEl.innerHTML = result.title;


//     $('#result').append(divEl);
//     $(`#divid${index}`).append(idNoEl);
//     $(`#divid${index}`).append(titleEl);
//     $(`#divid${index}`).append(imgEl);
   
// };






// // var apiUrl = 'https://api.spoonacular.com/recipes/1096010/ingredientWidget.json?apiKey=3e6d27e575b841e6a16c2b310b785c76'

// // complex query
// // var apiUrl= 'https://api.spoonacular.com/recipes/complexSearch?query=egg&number=2&apiKey=3e6d27e575b841e6a16c2b310b785c76'


// // var apiUrl = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=3e6d27e575b841e6a16c2b310b785c76'



//Ryan code


var searchButton = document.querySelector("#search-button")
var searchText = document.querySelector("#search-text") 
var searchTextAllergy = document.querySelector("#search-text_allergy") 
var apiKey = "3e6d27e575b841e6a16c2b310b785c76"
var archive= JSON.parse(window.localStorage.getItem("archive"))|| []; 

function getRecipe(event) {
    event.preventDefault()
    console.log(searchText.value)
    //jae
    console.log(searchTextAllergy.value)
    var ingredientWant = searchText.value
    //jae
    var ingredientNotWant = searchTextAllergy.value
    var recipeList = document.querySelector("#recipe-list")
    recipeList.innerHTML=""
    

    //jae
    var requestUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${ingredientWant}&number=10&intolerances=${ingredientNotWant}&apiKey=${apiKey}`
 
    fetch(requestUrl)
    .then(function (response){
        return response.json();
    }) 
    .then(function(data) {
    console.log(data) 
    //jae data.forEach to data.results.forEach
    data.results.forEach(function(recipe){
        var recipeListCard = document.createElement("div") 
        var recipeListBody = document.createElement("div")
        var recipeListPhoto = document.createElement("img")
        var recipeListTitle = document.createElement("h2") 
        var recipeListMissingIngTitle = document.createElement("h3") 
        var recipeInstructions = document.createElement("button") 
        var allIngredients = document.createElement("button") 
    //Jae
        // var missedIngredients = recipe.missedIngredients 
    
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
            var instructionsUrl = "https://api.spoonacular.com/recipes/"+recipe.id+"/information?&apiKey="+apiKey;
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
            var ingredientsUrl = "https://api.spoonacular.com/recipes/"+recipe.id+"/information?&apiKey="+apiKey;
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

    //Jae commented
        //console.log(recipe.missedIngredients[0].name)
        // console.log(missedIngredients);
        // missedIngredients.forEach(function(ingredient){
        //     var recipeListMissedIng = document.createElement("h4") 

        //     recipeListMissedIng.classList = "has-text-primary-dark" 

        //     recipeListMissedIng.textContent = ingredient.name 

        //     recipeListBody.appendChild(recipeListMissedIng)            
        // })
         
    }); 
    
    })
} 

searchButton.addEventListener("click", getRecipe)