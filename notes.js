
    static renderCategories(){
        const categories = Category.all
        Project.projectForm.innerHTML += `<select id="category-select">`

        categories.forEach(function(i){   
        
        document.querySelector("#category-select").innerHTML += `<option ${i.name} id=${i.name} value=${i.id}>
            ${i.name}
            </option>`
            
        })

        //Project.projectForm.innerHTML += `</select>`
      }









static renderIngredients(){  
    debugger;  
    const ingredients = Ingredient.all
    Project.projectForm.innerHTML += `<br><select id="ingredient-select">`
    ingredients.forEach(function(i){   
    document.querySelector("#ingredient-select").innerHTML += `<option ${i.name} id=${i.name} value=${i.id}>
        ${i.name}
        </option> `
        
    })

    document.querySelector("#ingredient-select").innerHTML +=` </select>`
   
}
