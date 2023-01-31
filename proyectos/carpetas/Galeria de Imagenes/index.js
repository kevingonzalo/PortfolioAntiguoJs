const fullimgbox = document.getElementById('fullimgbox')
const fullimg = document.getElementById('fullimg');
closeImg = ()=>{
   fullimgbox.style.display = "none"; 
}
openFullImg = (reference) =>{
    fullimgbox.style.display = "flex";
    fullimg.src = reference;
}