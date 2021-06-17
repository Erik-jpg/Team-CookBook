// console.log("hello world")
const saveBtn = document.querySelector(".button");
const deleteBtn = document.querySelector(".is-danger");
const form = document.querySelector(".card");
const form1 = document.querySelector(".card1");
const h2 = document.querySelector("h2");
const recipeInput = document.querySelector(".card");
// const h1 = document.querySelector('h2');
// // const personalGreeting = document.querySelector('.personal-greeting');

// // Stop the form from submitting when a button is pressed
// saveBtn.addEventListener("click", function (e) {
    
// });
//   // run function when the 'Say hello' button is clicked
saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("form");
    //     // store the entered name in web storage
    localStorage.setItem("recipe", recipeInput.value);
    //     // run nameDisplayCheck() to sort out displaying the
    //     // personalized greetings and updating the form display
    recipeDisplayCheck();
});
//   // run function when the 'Forget' button is clicked
form.addEventListener("click", function () {
    //     // Remove the stored name from web storage
    localStorage.removeItem("recipe");
    //     // run nameDisplayCheck() to sort out displaying the
    //     // generic greeting again and updating the form display
    recipeDisplayCheck();
});
//   // define the nameDisplayCheck() function
function recipeDisplayCheck() {
    //     // check whether the 'name' data item is stored in web Storage
    if (localStorage.getItem("recipe")) {
        //       // If it is, display personalized greeting
        let recipe = localStorage.getItem("recipe");
        h1.textContent = "Your, " + recipe;
        //       h2.textContent = 'Your recipe is, ' + recipe + 'Does this look acceptable?';
        //       // hide the 'remember' part of the form and show the 'forget' part
        //       forgetDiv.style.display = 'block';
        //       rememberDiv.style.display = 'none';
        //     } else {
        //       // if not, display generic greeting
        //     //   h1.textContent = 'Your recipes are saved ';
        //     //   h2.textContent = 'You have successfully saved the recipe.';
        //       // hide the 'forget' part of the form and show the 'remember' part
        //       form.style.display = 'none';
        //       form1.style.display = 'block';
        //     }
        //   }
        document.body.onload = recipeDisplayCheck;
        console.log(localStorage.getItem("recipe"));
    }
}