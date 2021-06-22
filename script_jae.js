console.log("hello world")

$(".searchBox").submit(eventhandler);
function eventhandler(event){
 event.preventDefault();
  
 var ingredientNotwant = document.getElementById("IngredientNotWantVal").value;
 var ingredientWant = document.getElementById("IngredientWantVal").value
 getRecipe(ingredientWant, ingredientNotwant)

}


function getRecipe(ingredientWant, ingredientNotWant){
  console.log(ingredientWant);
  // complex query
  var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${ingredientWant}&intolerances=${ingredientNotWant}&number=2&apiKey=3e6d27e575b841e6a16c2b310b785c76`
  fetch(apiUrl)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        
        var divClassRemove = document.querySelectorAll('.divClass')
        console.log("before", divClassRemove);
        if(divClassRemove.length !== 0)
        {divClassRemove[0].remove(divClassRemove);
        divClassRemove[1].remove(divClassRemove);}
        console.log("after", divClassRemove);
        

        console.log(data.results.length);
        for(var i=0; i < (data.results.length); i++)
          createRecipeList(data.results[i], i);
          recipeDetail
       
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  
  });
}


// Create recipe 
function createRecipeList(result, index){
   
   
    // resultEl = document.querySelector('#result');
    
    divEl = document.createElement('div')
    divEl.setAttribute('class', 'divClass');
    divEl.setAttribute('id', `divid${index}`);

    
    idNoEl = document.createElement('p');
    idNoEl.setAttribute('class', 'idNoClass');
    
    imgEl = document.createElement('img');
    imgEl.setAttribute('class', 'imgClass');
    
    titleEl = document.createElement('p');
    titleEl.setAttribute('class', 'titleClass');

    idNoEl.innerHTML = "ID : " + result.id;
    imgEl.src = result.image;
    titleEl.innerHTML = result.title;


    $('#result').append(divEl);
    $(`#divid${index}`).append(idNoEl);
    $(`#divid${index}`).append(titleEl);
    $(`#divid${index}`).append(imgEl);
   
};






// var apiUrl = 'https://api.spoonacular.com/recipes/1096010/ingredientWidget.json?apiKey=3e6d27e575b841e6a16c2b310b785c76'

// complex query
// var apiUrl= 'https://api.spoonacular.com/recipes/complexSearch?query=egg&number=2&apiKey=3e6d27e575b841e6a16c2b310b785c76'


// var apiUrl = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=3e6d27e575b841e6a16c2b310b785c76'






