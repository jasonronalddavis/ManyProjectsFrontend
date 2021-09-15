class Category  {



static all = []
static categoryContainer = document.getElementById("category-container")

constructor({id, name, project_id, user_id, ingredient_id}){
this.id = id
this.name = name
this.project_id = project_id
this.user_id = user_id
this.ingredient_id = ingredient_id

this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `category-${this.id}`

Category.all.push(this)

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
    Category.categoryContainer.appendChild(this.categoryHTML())
    }

}