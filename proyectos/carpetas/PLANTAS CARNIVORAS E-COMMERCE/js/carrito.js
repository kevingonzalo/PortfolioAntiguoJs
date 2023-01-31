
const carro = document.getElementById('carro');
const boton = document.getElementById('equis');
const body = document.querySelector('body');
const ventanaAbierta = document.getElementById('ventana')


carro.addEventListener('click', () =>{
    body.setAttribute('class','no-scroll');
    ventanaAbierta.setAttribute('id','ventana-abierta');
})
boton.addEventListener('click',() =>{
    body.removeAttribute('class','no-scroll');
    ventanaAbierta.setAttribute('id','ventana');
})