class ProjectService

                        {

 
constructor(endpoint){
this.endpoint = endpoint
        }
// 1: Read/Index action
getProjects(){
fetch(`${this.endpoint}/projects`)
.then(resp => resp.json() ) 

.then(projects => {
    for (const project of projects ){
        const p = new Project(project)
        p.slapOnDom()
    }

Project.renderCategories()
Project.renderForm()
Project.renderEditForm()






  
})
}


 createProject(){





    const category_Ids = []
    const values = document.querySelectorAll("input[type=checkbox]");
    values.forEach(chbox => {
        if (chbox.checked) {
          category_Ids.push(chbox.value)
        }
      })


     const project = {
         name: document.getElementById('project-name').value,
         description: document.getElementById('project-description').value,
         total_price: document.getElementById('total_price').value,
         category_ids: category_Ids,
       // category1: document.querySelector('input#cat-1[value]').value,
       // category2: document.querySelector('input#cat-2[value]').value,
       // category3: document.querySelector('input#cat-3[value]').value,
        ingredient_id: document.getElementById('ingredient-select').value
     
    }


const configObj = {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
    },
body: JSON.stringify(project)

}

fetch(`${this.endpoint}/projects`, configObj)
.then(resp => resp.json())
.then(project => {
console.log(project)
})
    }








//  backEndEdit(id){
//         debugger;
//         fetch(`${this.endpoint}/projects/${id}`,{
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//   body: JSON.stringify(project)
//     })

//     }


    backEndDelete(id){
        fetch(`${this.endpoint}/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => alert(json.message))
    }
    


}
