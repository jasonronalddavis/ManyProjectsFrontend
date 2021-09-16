class ProjectService

                        {
    
constructor(endpoint){
this.endpoint = endpoint
        }
// 1: Read/Index action
getProjects(){
fetch(`${this.endpoint}/projects`)
.then(resp => resp.json())
.then(projects => {
    for (const project of projects ){
        const c = new Category(project)
        c.slapOnDom()
    }
})
}


 createProject(){
     const project = {
         name: document.getElementById('name').value,
         category: document.getElementById('category').value,
         ingredient: document.getElementById('ingredient').value,
         ingredient: document.getElementById('ingredient').value,
         ingredient: document.getElementById('ingredient').value,
         description: document.getElementById('description').value,
         price_range: document.getElementById('price_range').value
       
         }

const configObj = {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
    },
body: JSON.stringify(project)

}

fetch(`${this.endpoint}/projects`, congfigObj)
.then(resp => resp.json())
.then(project => {
console.log(project)
})
    }
}