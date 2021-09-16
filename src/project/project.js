class Project  {



static all = []
static projectContainer = document.getElementById("projects-container")
static projectForm = document.getElementById('form-container')






constructor({id, name, category_id, ingredient_id, description, price_range}){
this.id = id
this.name = name
this.category_id = category_id
this.ingredient_id = ingredient_id
this.description = description
this.price_range = price_range
this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `project-${this.id}`
Project.all.push(this)

}




projectHTML(){
    this.element.innerHTML += `
    <div>
    <h1>${this.name}</h1>
    </div>
    `
    return this.element
}



    
static renderForm(){
 Project.projectForm.innerHTML += `
<form id="new-project-form">
    Name: <input type="text" id="name"><br>
    Choose At Least 3 ingredients...<br>
    Ingredient 1: name: <input type="text" id="ingredient">
    product url: <input type="text" id="ingredient">
    product price: <input type="text" id="ingredient"><br>
    Ingredient 2: name: <input type="text" id="ingredient">
    product url: <input type="text" id="ingredient">
    product price: <input type="text" id="ingredient"><br>
    Ingredient 3: name: <input type="text" id="ingredient">
    product url: <input type="text" id="ingredient">
    product price: <input type="text" id="ingredient"><br>
    Categories:<br>
     <input type="checkbox" id="category" name="art" value="1">
    <label for="category"> Art </label><br>
     <input type="checkbox" id="category" name="mechanics" value="2">
    <label for="category"> Mechanics </label><br>
     <input type="checkbox" id="category" name="software" value="3">
    <label for="category"> Software </label><br>
     <input type="checkbox" id="category" name="nature" value="4">
    <label for="category"> Nature</label><br>
    <input type="checkbox" id="category" name="politics" value="5">
    <label for="category"> Politics</label><br>
     <input type="checkbox" id="category" name="social" value="6">
    <label for="category"> Social</label><br>
     <input type="checkbox" id="category" name="economics" value="7">
    <label for="category"> Economics</label><br>
    Description: <textarea id="description"></textarea><br><br>
    Tolal Estimated Cost: <input type="text" id="price_range"><br>
    <input type="submit" id="create">
<form>
   `
   }


   slapOnDom(){
    console.log()
    Project.projectContainer.append(this.projectHTML())
    }


}
