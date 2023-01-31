const valor = document.getElementById('value');
const decrementar = document.querySelector('.decrementar');
const reset = document.querySelector('.reset');
const aumentar = document.querySelector('.aumentar');



const changeColor = () => {
    if(valor.textContent === '0'){
        valor.style.color = "black";
    }else if(valor.textContent < '0'){
        valor.style.color = "red";
    }else if(valor.textContent > '0'){
        valor.style.color = "green";
    }
}
reset.addEventListener('click',()=>{
    valor.textContent = 0;
    changeColor();
});
decrementar.addEventListener('click',()=>{
    valor.textContent --;
    changeColor();
})
aumentar.addEventListener('click',()=>{
    valor.textContent ++;
    changeColor();
})
