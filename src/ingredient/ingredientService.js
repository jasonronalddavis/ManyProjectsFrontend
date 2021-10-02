class IngredientService
                  {

               
    
constructor(endpoint){
this.endpoint = endpoint
        }
// 1: Read/Index action
getIngredients(){
fetch(`${this.endpoint}/ingredients`)
.then(resp => resp.json())
.then(ingredients => {
    for (const ingredient of ingredients ){
        const i = new Ingredient(ingredient)
        i.slapOnDom()
    }
})
}


//Project.all.filter(ingredient => ingredient !== ingredient)


 createIngredient(){
    
     const ingredient = {
         name: document.getElementById('name').value,
        image_url: document.getElementById('image_url').value,
         description: document.getElementById('description').value,
         price: document.getElementById('price').value,
       
         }

         
       
         

const configObj = {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
    },
body: JSON.stringify(ingredient)

}





fetch(`${this.endpoint}/ingredients`, configObj)
.then(resp => resp.json())
.then(ingredient => {
console.log(ingredient)
})
    }
 

}



