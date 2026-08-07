const proyectos = [

{

titulo:"Proyecto 1 Sistema de Inventario",

tech:"HTML, CSS, JS",

desc:"CRUD básico con LocalStorage"

},

{

titulo:"Proyecto 2 Clon de Calculadora",

tech:"JavaScript puro",

desc:"Operaciones matemáticas con eval seguro"

},

{

titulo:"Proyecto 3 Dashboard de Clima",

tech:"Fetch API + OpenWeather",

desc:"Consume API REST pública"

}

];

function renderizarProyectos(){

const contenedor=document.querySelector(".grid-proyectos");

proyectos.forEach(proyecto=>{

const card=document.createElement("article");

card.className="card-proyecto";

card.innerHTML=`

<h3>${proyecto.titulo}</h3>

<span class="tech">${proyecto.tech}</span>

<p>${proyecto.desc}</p>

`;

contenedor.appendChild(card);

});

}

document.querySelectorAll("nav a").forEach(enlace=>{

enlace.addEventListener("click",(e)=>{

e.preventDefault();

const destino=document.querySelector(enlace.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

document.getElementById("btn-ver-mas").addEventListener("click",()=>{

document.querySelector("#proyectos").scrollIntoView({

behavior:"smooth"

});

});

document.addEventListener("DOMContentLoaded",renderizarProyectos);
