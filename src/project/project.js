class Project  {



static all = []
static projectContainer = document.getElementById("project-container")
static projectForm = document.getElementById('form-container')






constructor({id, name, category_id, user_id, ingredient_id}){
this.id = id
this.name = name
this.category_id = category_id
this.user_id = user_id
this.ingredient_id = ingredient_id

this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `project-${this.id}`

Project.all.push(this)

}




categoryHTML(){
    this.element.innerHTML += `
    <div>
    <h1>${this.name}</h1>
    </div>
    `
    return this.element
}


slapOnDom(){
    Project.projectContainer.appendChild(this.categoryHTML())
    }
    
static renderForm(){
 Project.projectForm.innerHTML += `
<form id="new-project-form">
    Name: <input type="text" id="name">
    Ingredients: <input type="text" id="ingredient">
    Category: <input type="text" id="category"><br>
    Description: <input type="text" id="description">
    Price Range: <input type="text" id="price_range">
    <input type="submit" id="create"
<form>
   `
   }


}
