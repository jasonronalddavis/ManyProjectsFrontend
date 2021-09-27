class Project  {



static all = []
static projectContainer = document.getElementById("projects-container")
static projectForm = document.getElementById('form-container')






constructor({id, name, description, total_price}){
this.id = id
this.name = name
this.description = description
this.total_price = total_price
this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `project-${this.id}`
this.element.addEventListener('click', this.handleClick)
Project.all.push(this)

}




projectHTML(){
    this.element.innerHTML += `
    <div>
    <h1>${this.name}</h1>
    <button id=${this.id} >Delete</button>
    </div>
    `
    return this.element
}


   slapOnDom(){
    console.log()
    Project.projectContainer.append(this.projectHTML())
    }


    
static renderForm(){
 Project.projectForm.innerHTML += `
<form id="new-project-form">
    Name: <input type="text" id="name"><br>
    Description: <textarea id="description"></textarea><br><br>
    Tolal Estimated Cost: <input type="number" step="any" id="total_price"><br>
    <input type="submit" id="create">
<form>
   `
   }


handleClick = () => { 
    if (event.target.innerText === 'Delete'){
        projectService.deleteProject(this.id)
    }
}



    

}
