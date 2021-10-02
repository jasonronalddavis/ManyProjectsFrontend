
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
