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



    backEndDelete(id){
        debugger;
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




