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

   const category_Ids = []
    const iValues = document.querySelectorAll("input[type=checkbox]");
    iValues.forEach(chbox => {
        if (chbox.checked) {
          category_Ids.push(chbox.value)
        }
      })



  
     const ingredient = {
         name: document.getElementById('ingredient-name').value,
         description: document.getElementById('ingredient-description').value,
        image_url: document.getElementById("image_url").value,
         price: document.getElementById('price').value,     
         url: document.getElementById('url').value,
         category_ids: category_Ids
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
.then(project => {
console.log(project)
})
    }









    backEndDelete(id){
        fetch(`${this.endpoint}/ingredients/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => alert(json.message))
    }
    

}

