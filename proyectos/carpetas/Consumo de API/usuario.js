const aplicacion = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const p = document.createElement('p')
    p.innerHTML = data.name;
    aplicacion.appendChild(p)
})
.catch(err => console.log((err)))