// any global variables


// any initializations of the application 



// acquire sourcees ,js files

// start coding from src files & not index.js to prevent confusion

// 


const base_url = "http://localhost:3000/api/v1"
const ingredientService = new IngredientService(base_url)
const categoryService = new CategoryService(base_url)
const projectService = new ProjectService(base_url)
const deleteBttn = document.querySelector("deleteProject")


Ingredient.ingredientForm.addEventListener('submit', submitIngredient)
Project.projectForm.addEventListener('submit', submitProject)
Project.editProjectForm.addEventListener('submit', updateProject)




categoryService.getCategories()
ingredientService.getIngredients()
projectService.getProjects()





function showProject(){
    event.preventDefault()
    projectService.showProject()

}



function submitIngredient(){
 
    ingredientService.createIngredient()

}

function submitProject(event){

    projectService.createProject()
}

function updateProject(event){

projectService.backEndedit()

}







document.addEventListener('DOMContentLoaded', () => {
     Project.scrollAble()
})


// function getCategories() {
//     fetch(endPoint)
//     .then(response => response.json())
//     .then( categories => {
// categories.data.forEach(category => {
// const categoryMarkup = `
//     <div data-id=${category.id}>
//     <img src="assets/images/PaintPallete.png" height="100" width="100">
//         <h3>${category.attributes.name}</h3>
//         <button data-id=${category.id}>edit</button>
//         </div>
//     <br><br>`;
//         document.querySelector('#category-container').innerHTML+=
//         categoryMarkup
//          }) 
//      }) 
   
//     }






