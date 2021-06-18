// console.log("hello world")
const saveBtn = document.querySelector(".button");
const deleteBtn = document.querySelector(".is-danger");
const form = document.querySelector(".card");
const form1 = document.querySelector(".card1");
const h2 = document.querySelector("h2");
const recipeInput = document.querySelector(".card");
const getButton = document.querySelector('.is-link');
// const h1 = document.querySelector('h2');
// // const personalGreeting = document.querySelector('.personal-greeting');

// // Stop the form from submitting when a button is pressed
// saveBtn.addEventListener("click", function (e) {
    function recipeDisplayCheck() {
        if (localStorage.getItem("recipe")) {
            let recipe = localStorage.getItem("recipe");
            form1.textContent = "Your, " + recipe
            }};
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
//Make another localstorage setItem "users recipes" save an array of user's recipes, can call up array with recipe names. When page loads, populate the array how you want them to see it, set array as buttons, that allow the user to select it (for loop to add buttons)
//save info of recipe use javascript to show. use for loop to match measurement ingredients 

//   // run function when the 'Forget' button is clicked
deleteBtn.addEventListener("click", function () {
    //     // Remove the stored name from web storage
    localStorage.removeItem("recipe");
    //     // run nameDisplayCheck() to sort out displaying the
    //     // generic greeting again and updating the form display
    recipeDisplayCheck();
});
//   // define the nameDisplayCheck() function
getButton.addEventListener("click", function recipeDisplayCheck() {
    if (localStorage.getItem("recipe")) {
        let recipe = localStorage.getItem("recipe");
        form1.textContent = "Your, " + recipe;

        document.body.onload = recipeDisplayCheck;
        console.log(localStorage.getItem("recipe"));
    }
});