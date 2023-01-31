const body = document.body;
const fullImg = document.getElementById('fullImg');
const imgSkills = document.getElementById('img-skills');
const descripcion = document.getElementById('descripcion');


description = (foto,resumen) =>{
    fullImg.style.display = "flex";
    imgSkills.src = foto;
    descripcion.textContent = resumen;
    body.classList.toggle('no-scroll');
}

fullImg.addEventListener('click',()=>{
    fullImg.style.display = "none";
    body.classList.toggle('no-scroll');
})