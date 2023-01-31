const stock = document.getElementById('stock');
const contenedorCarrito = document.getElementById('contenedor-carrito');
const btnVaciar = document.getElementById('btn-vaciar');
const contador = document.getElementById('contador');
var precioTotal = document.getElementById('PrecioTotal');


let carrito = [];


// boton de vaciar elementos del carrito
btnVaciar.addEventListener('click',()=>{
    for (let i = 0; i < carrito.length; i++) {
        carrito[i].cantidad = 1;
    }
    carrito.length = 0;
    actualizarCarrito();
});

// pintar el stock de los productos
productos.forEach((item)=>{
    const div = document.createElement('div');
    div.classList.add('contenido');
    div.innerHTML = `
        <img src=${item.img}>
        <h3 class="titulo">${item.nombre}</h3>
        <h4 class="precio">${item.precio}$</h4>
        <button id="producto${item.id}">Comprar</button>
    `
    stock.appendChild(div);
    document.getElementById(`producto${item.id}`).addEventListener('click',() => agregarCarrito(item.id));
})


// agregar elementos al carrito
const agregarCarrito = (prodID)=>{
    let compra = productos.find(prod => prod.id === prodID);
    if(carrito.find(prod => prod.id === compra.id)){
       if(compra.cantidad < compra.stock){
         compra.aumentarCantidad();
        }else{
            swal("YA NO HAY STOCK DE ESTE PRODUCTO!");
        }
    }else{
        carrito.push(compra); 
    } 
    actualizarCarrito();
    console.log(carrito);
    
}

// eliminar elemento del carrito 
const eliminarCarrito = (prodID) =>{
    const item = carrito.find(prod=> prod.id === prodID);
    item.cantidad = 1;
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}
// boton de restar cantidad
const restar=(prodid)=>{
    const item = carrito.find((prod) => prod.id === prodid)
    if(item.cantidad > 0){  
        item.cantidad --;
        actualizarCarrito();
    }
    if(item.cantidad === 0){
        eliminarCarrito(item.id)
    }
}
// boton de sumar cantidad
const sumar=(prodid)=>{
    const item = carrito.find((prod)=> prod.id ===prodid);
    if(item.cantidad < item.stock){
        item.cantidad++;
        actualizarCarrito();
    }else{
        swal("YA NO HAY STOCK DE ESTE PRODUCTO!"); 
    }
}
// local storage 
document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('carrito')){ 
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
})
// pintar y actualizar las compras del carrito
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = "";
    carrito.forEach(item =>{
        const div = document.createElement('div');
        div.className = ('productos-carrito');
        div.innerHTML = `
            <img class="imagen-carrito" src="${item.img}"  alt="${item.nombre}">
            <p>${item.nombre}</p>
            <p>Precio: ${item.precio*item.cantidad}$</p>
            <div class="botones">
                <button onClick="restar(${item.id})"class="btn-restar">-</button>
                <p class="cantidad-Prod">${item.cantidad}</p>
                <button onClick="sumar(${item.id})"class="btn-sumar">+</button>
            </div>
            <button onClick="eliminarCarrito(${item.id})" class="btn-eliminar"><i class="fa-solid fa-trash-can"></i></i></button>
        `
        contenedorCarrito.appendChild(div);  
    }) 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    contador.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, item) => acc + item.precio*item.cantidad , 0);
}

