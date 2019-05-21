var contenido = document.querySelector('#contenido')
function traer() {
    fetch(' https://dog.ceo/api/breeds/image/random ')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        contenido.innerHTML = `
        <img src="${data.message}" width="100px" class="img-fluid rounded-circle">
        `
    })
}
