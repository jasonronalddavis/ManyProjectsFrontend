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

    Project.renderIngredients()

})


}


//Project.all.filter(ingredient => ingredient !== ingredient)


 createIngredient(){
     const ingredient = {
         name: document.getElementById('ingredient-name').value,
         description: document.getElementById('ingredient-description').value,
         price: document.getElementById('price').value,     
         url: document.getElementById('url').value 
         }


         console.log(ingredient)
       
       
         

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

