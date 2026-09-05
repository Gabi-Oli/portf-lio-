
//window.addEventListener('scroll', () => {
//  if (window.scrollY > 100) {
//    imagemFlutuante.style.opacity = 1;
//  } else {
//    imagemFlutuante.style.opacity = 0;
//  }
//});

//function turnBold(){
//  const el = document.querySelector("p");
//  el.setAttribute("class" , "bold")
//}



function cliqueAqui(){
  const h2 = document.getElementById("apresentacao");
  h2.innerHTML = " Web Designer focada em criar sites modernos e funcionais. Transformo ideias em experiências digitais bonitas, rápidas e fáceis de usar.";
}

function mudarImagem(){
  const el = document.querySelector("img");
  el.src = "./src/Foto2.png";
  
}

function toggleDarkMode(){
  const el = document.querySelector("body");
  el.classList.toggle("darkMode");

}
