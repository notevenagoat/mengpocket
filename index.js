let btnAddRecipe = document.querySelector("#btn-submit");
let btnAddIngredient = document.querySelector("#btn-ingredient");
let totalIngredients = 1;
let totalRecipes = 0;
let tempList = []; 


var allRecipes = [
  { 
  id: 0,
  title: "",
  ingredients: []
  },

]


const saveRecipes = () => {
  for(let i=0;i<allRecipes.length;i++){
    let currentId = String(allRecipes[i].id);
    let taskJson = JSON.stringify(allRecipes[i]);
    localStorage.setItem("Recipe",currentId);
    localStorage.setItem("content",taskJson);
  }
 

}
// Load method for local storage
const loadRecipes = () => {
 if(localStorage.getItem("Recipe")){
   let taskJson = localStorage.getItem("content");
  let importwtf = JSON.parse(taskJson);
  console.log(importwtf);
 }

}

loadRecipes();

const recipeList =[];

     //event listener for add recipe button
btnAddIngredient.addEventListener('click', function (event) {
  totalIngredients ++;
  addIngredient();

      });
  
 btnAddRecipe.addEventListener('click', function (event) {
 
  addRecipe();
  totalRecipes ++;

      });

// add ingredient field
const addIngredient = () => {
 
    let ingredientHtml= document.createElement('li');
    ingredientHtml.innerHTML= `<input class="form-control" type="text" id="recipeIngredient${totalIngredients}" placeholder="Ingredient" >`;
    document.querySelector("#ingredientDiv").appendChild(ingredientHtml); 

}

// add recipe to object
const addRecipe = () => {
 tempList=[];

 // puts together ingredients
  for(let i=1;i<=totalIngredients;i++){

    let tempIngredient = document.querySelector(`#recipeIngredient${i}`).value || 'empty';
      if (tempIngredient !== 'empty'){
        tempList.push(tempIngredient);
 
      }
    }
// add recipe to object

  let tempRecipe = {
    id : totalRecipes,
    title: document.querySelector(`#recipleTitle`).value,
    ingredients : tempList,
  }
  // pushes object to main array
  if (validateRecipe(tempRecipe.title, tempList) === true)
        {
        allRecipes.push(tempRecipe);

        displayRecipe(tempRecipe);
        totalIngredients=1;
      clearRecipe();
        } 
        else {
          alert("You must have a title and at least one ingredient ");
        }
saveRecipes();
    }

    // clears recipe
const clearRecipe = () => {
  document.querySelector("#ingredientDiv").innerHTML=`  <p class="mt-3">Ingredients:</p> 
  <li><input class="form-control" type="text" id="recipeIngredient1" placeholder="Ingredient"></li>`;
  document.querySelector("#recipleTitle").value = '';
}


// delete recipe from object
const deleteRecipe = () => {

}

// display recipe in DOM
const displayRecipe = (tempRecipe) => {

 // creates display
  let recipeHtml= document.createElement('li');
  recipeHtml.innerHTML = ` 
  <h5> ${tempRecipe.title}</h5>
  <li class="list-group-item"> ${tempRecipe.ingredients}</li>`
  document.querySelector("#recipeDisplay").appendChild(recipeHtml);
}

const validateRecipe = (title,ingredients) => {
if (title !== '' && ingredients !== '')
{
  return true;
}

}
