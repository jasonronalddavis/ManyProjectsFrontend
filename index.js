const endPoint = "http://localhost:3000/api/v1"





document.addEventListener('DOMContentLoaded', () => {
    getCategory()
})


function getCategory() {
    fetch(endPoint)
    .then(response => response.json())
    .then( categories => {
categories.data.forEach(category => {
const categoryMarkup = `
    <div data-id=${category.id}>
    <img src="assets/images/PaintPallete.png" height="100" width="100">
        <h3>${category.attributes.name}</h3>
        <button data-id=${category.id}>edit</button>
        </div>
    <br><br>`;
        document.querySelector('#category-container').innerHTML+=
        categoryMarkup
         }) 
     }) 
   
    }