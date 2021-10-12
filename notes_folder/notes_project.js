


class Project 
{




static projectContainer = document.getElementById("projects-container")
static projectForm = document.getElementById('form-container')
static editProjectForm = document.getElementById('edit-project-form')

static all = []

static ingredients = []
static categories = []


constructor({id, name, description, total_price, ingredient_id, category_id}){
this.id = id
this.name = name
this.description = description
this.total_price = total_price
this.ingredient_id = ingredient_id
this.category_id = category_id
this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `project-${this.id}`
this.element.addEventListener('click', this.appendDelete)
this.element.addEventListener('click', this.appendEdit)
Project.all.push(this)

}



projectHTML(){
    this.element.innerHTML += `
    <div>
    <h1>${this.name}</h1>
    <button id=${this.id}>Delete</button>
    <button id=${this.id} class= btn-primary>Edit</button>
    </div>
    `
    return this.element
}


   slapOnDom(){
    console.log()
    Project.projectContainer.append(this.projectHTML())
    }
    

  


   static renderIngredients() {   
       const ingredients = Ingredient.all
       
        console.log(ingredients)   
        Project.projectForm.innerHTML += `<br><select id="ingredient-select">`
        ingredients.forEach(function(i){   
            document.querySelector("#ingredient-select").innerHTML += `<option ${i.name} id=${i.id} value=${i.name}>
                ${i.name}
                </option> `
    
                document.querySelector("#ingredient-select").innerHTML +=` </select>`
                
            })
        }
    



        static renderCategories(){  
            const categories = Category.all
            Project.projectForm.innerHTML += `<h3> Select at Least one Category: </h3>`
            categories.forEach(function(i){   
           Project.projectForm.innerHTML += `<div id=cat-content value=${i.name}>
            <input type="checkbox" ${i.name} id=${i.id} value=${i.name}>
              ${i.name}
              </div>
              `
            })    
        }
    


        static findProject(event) {
            const projectId = parseInt(event.target.id); 
              const project = Project.all.find(x => x.id === projectId);
              return project
          }


  
static renderForm(){
 Project.projectForm.innerHTML += `
<form id="new-project-form"><br>
    Name: <input type="text" id="project-name"><br><br>
    Description: <textarea id="project-description"></textarea><br><br>
    Tolal Estimated Cost: <input type="number" step="any" id="total_price" value=""><br>
    <input type="submit" id="create">
<form>
   `
   }


static renderEditForm(){
    Project.editProjectForm.innerHTML += `
    <h2> Edit Project </h2>
    
    `
 Project.editProjectForm.innerHTML += `
<form id="new-project-form"><br>
    Name: <input type="text" id="edit-project-name"><br><br>
    Description: <textarea id="edit-project-description"></textarea><br><br>
    Tolal Estimated Cost: <input type="number" step="any" id="edit-total_price"><br>
    <input type="submit" id="create">
<form>
   `
   }










 static findProject() {
  const projectId = parseInt(event.target.id); 
    const project = Project.all.find(x => x.id === projectId);
    return project
}



appendEdit = () => { 

    if (event.target.innerText === 'Edit'){
       const element = document.querySelector(`#${this.element.id}`)
    }
    if (Project.editProjectForm.style.display === 'none'){
        Project.editProjectForm.style.display = "block";
    }else{
        Project.editProjectForm.style.display = 'none';

    }
    
    }


appendDelete = () => { 
    if (event.target.innerText === 'Delete'){
       const element = document.querySelector(`#${this.element.id}`)
        element.remove()
        projectService.backEndDelete(this.id)
    }
}



}





