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




 createProject(){
     const project = {
         name: document.getElementById('name').value,
         category: document.getElementById('name').value,
         ingredient: document.getElementById('name').value,
         ingredient: document.getElementById('name').value,
         ingredient: document.getElementById('name').value,
         description: document.getElementById('name').value,
         price_range: document.getElementById('name').value
         }
         debugger;
     }



}

}