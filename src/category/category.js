

class Category  {





static all = []
static categoryContainer = document.getElementById("category-container")
static art = document.getElementById("art")


constructor({id, name, project_id, user_id, ingredient_id, image_url}){
this.id = id
this.name = name
this.project_id = project_id
this.user_id = user_id
this.ingredient_id = ingredient_id
this.image_url = image_url
this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `category-${this.id}`

Category.all.push(this)


}












categoryHTML(){
    
    this.element.innerHTML += `
    <div id="category-assests">
    <h1>${this.name}</h1>
    <img src=${this.image_url}>
    </div>
    `
    return this.element
}




   




slapOnDom(){
    Category.categoryContainer.appendChild(this.categoryHTML())

   }

    
setAttributes(){
let art = document.createElement("img");
art.src = this.image_url;
src = document.getElementById("art");
src.appendChild(art);
  }   


//let artz = Category.categoryContainer.innerText.match("Art");
  



}

 let software = new Category({name: "Software", image_url: "assets/images/software.png"});
 let mechanics = new Category({name: "Mechanics", image_url: "assets/images/mechanics.png"});


 let art = new Category({name: "Art", image_url: "assets/images/PaintPallete.png"});


 mechanics.slapOnDom()
software.slapOnDom()
 art.slapOnDom()