const endPoint = "http://localhost:3000/api/v1";





document.addEventListener('DOMContentLoaded', () => {
    getUser()
})


function getUser() {
    fetch(endPoint)
    .then(response => response.json())
    .then(category => {

category.data.forEach











    console.log(category);  
    })
  }
  