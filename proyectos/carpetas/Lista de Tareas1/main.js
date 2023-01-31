
const  lista = document.getElementById("lista");
const  tareasInput = document.getElementById("tareasInput");
const botonAgregarTarea = document.getElementById("btn-agregar");



// funcion para agregar al presionar el boton
botonAgregarTarea.addEventListener('click',() =>{
    let tarea = tareasInput.value;
    let nuevaTarea = document.createElement("li");
    let enlace = document.createElement("a");
    let contenido = document.createTextNode(tarea);
    // pregunta si la tarea es valida
    if(tarea===''){
        tareasInput.setAttribute("placeholder", "Agrega una Tarea Valida!");
        tareasInput.className = "error";
        return "false";
    }else{
        // agrego el contenido al enlace
         enlace.appendChild(contenido);
        //  le agrego un atributo href
        enlace.setAttribute("href","#");
        // agrego un enlace a la nueva tarea
        nuevaTarea.appendChild(enlace);
        // agrego al final de la lista la nueva tarea
        lista.appendChild(nuevaTarea);
        // limpiar input
       
        tareasInput.value = "";  
    }   
});

// eliminar elemento de la lista 
lista.addEventListener('click',(e)=>{
    const item = e.target.parentElement;
    lista.removeChild(item);
})




