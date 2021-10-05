class Ingredient  {


static all = []
static ingredientContainer = document.getElementById("ingredients-container")
static ingredientForm = document.getElementById('ingredient-form-container')






constructor({id, name, description, price, url}){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.url = url
    
    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `ingredient-${this.id}`
    this.element.addEventListener('click', this.appendDelete)
    Ingredient.all.push(this)


}




ingredientHTML(){
    this.element.innerHTML += `
    <div>
    <h1>${this.name}</h1>
    <button id=${this.id} >Delete</button>
    </div>
    `
    return this.element
}


   slapOnDom(){
    console.log()
    Ingredient.ingredientContainer.append(this.ingredientHTML())
    }




    static renderCategories(){
        const categories = Category.all
        categories.forEach(function(i){   
        
          Ingredient.ingredientForm.innerHTML += `
        <input type="checkbox"  ${i.name} id=${i.id} value=${i.id}>
          ${i.name}

          
          `
        
            })
      }




    
static renderForm(){
 Ingredient.ingredientForm.innerHTML += `
<form id="new-ingredient-form">
    Name: <input type="text" id="name"><br>
    Description: <textarea id="description"></textarea><br><br>
    Price: <input type="number" step="any" id="price"><br>
    <input type="submit" id="create">
<form>
   ` 
   }



appendDelete = () => { 
    if (event.target.innerText === 'Delete'){
        Ingredient.deleteIngredient(this.id)
        const element = document.querySelector(`#${this.element.id}`)
        element.remove()
    }
}

static deleteIngredient = (id) => {
    let ingredientId = parseInt(event.target.id);  
   let ingredient = Ingredient.all.find(x => x.id === ingredientId);
Ingredient.all.filter((ingredient) => id !== ingredient.id);


}




}




