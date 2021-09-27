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
        const p = new Project(project)
        p.slapOnDom()
    }
})
}

deleteProject(){ 
    let projectId = parseInt(event.target.id);  
   let project = Project.all.find(x => x.id === projectId);
   debugger;
Project.all.filter(projectId)
}

//Project.all.filter(project => project !== project)


 createProject(){
    
     const project = {
         name: document.getElementById('name').value,
         description: document.getElementById('description').value,
         total_price: document.getElementById('total_price').value,
       
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









}




