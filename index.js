// any global variables


// any initializations of the application 



// acquire sourcees ,js files

// start coding from src files & not index.js to prevent confusion

// 



const base_url = "http://localhost:3000/api/v1"
const categoryService = new CategoryService(base_url)
const projectService = new ProjectService(base_url)


Project.projectForm.addEventListener('submit', handleSubmit)
categoryService.getCategories()
projectService.getProjects()
Project.renderForm()


function handleSubmit(){
    debugger;
    projectService.createProject()
}



// document.addEventListener('DOMContentLoaded', () => {
//     getCategories()
// })


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