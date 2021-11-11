class Ingredient  {


static all = []
static ingredientContainer = document.getElementById("ingredients-container")
static ingredientForm = document.getElementById('ingredient-form-container')






constructor({id, name, description, image_url, price, url, category_ids }){
    this.id = id
    this.name = name
    this.description = description
    this.image_url = image_url
    this.price = price
    this.category_ids = category_ids
    this.url = url
    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `ingredient-${this.id}`
    this.element.addEventListener('click', this.appendDelete) 
    Ingredient.all.push(this)
//debugger;


}




ingredientHTML(){

    const img = document.createElement('img')



    this.element.innerHTML += `
    <div>
    <img src=${this.image_url} id=i_image_url>
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
        Ingredient.ingredientForm.innerHTML += `<h3> Select at Least one Category: </h3>`
        categories.forEach(function(i){   
       Ingredient.ingredientForm.innerHTML += ` <div id=ing-cat-content>
        <input type="checkbox" id=${i.id}  value=${i.id}>
          ${i.name}
          </div>
          `
        })    
    }



    
static renderForm(){
 Ingredient.ingredientForm.innerHTML += `
<form id="new-ingredient-form">
    Name: <input type="text" id="ingredient-name"><br>
    Url: <input type="text" id="url"><br>
    Description: <textarea id="ingredient-description"></textarea><br><br>
    Image_url: <input type="text" id="image_url"><br><br>
    Price: <input type="number" step="any" id="price"><br>
    <input type="submit" id="create-ingredient">
<form>
   ` 
   }



appendDelete = () => { 
    if (event.target.innerText === 'Delete'){
        Ingredient.deleteIngredient(this.id)
        const element = document.querySelector(`#${this.element.id}`)
        element.remove()
        ingredientService.backEndDelete(this .id)
    }
}

static deleteIngredient = (id) => {
    let ingredientId = parseInt(event.target.id);  
   let ingredient = Ingredient.all.find(x => x.id === ingredientId);
Ingredient.all.filter((ingredient) => id !== ingredient.id);


}




}



