//alert("Hola este es mi Javascript");

let nombre1 = "Maycol";
// console.log(nombre1);

let titulo = document.querySelector (".acercademi");
titulo.innerHTML = nombre1;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log (textoTitulo);

if (textoTitulo == nombre1) {
    titulo.innerHTML = "Sobre mi"
} else {
    console.log("no se cumple")
}


//FUNCIONES

let nombre = "Maycol";
let ciudad = "Bogota";
let color = "rojo";

let parrafo = document.querySelector(".parrafo2"); 
function cambiarTexto(nombre, ciudad, color) {
    let contenido =  `Me llamo ${nombre} naci en ${ciudad} y mi color favorito es el ${color}`;
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, color);