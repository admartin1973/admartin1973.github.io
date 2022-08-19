import { encriptar, desencriptar, ocultarConjunto, estaVacio } from "./funciones.js";
import copiar from "./copiar.js";

const texto=document.querySelector("textarea");
const botonEnc = document.querySelector("#encriptar");
const botonDes = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");
const textoResultado = document.querySelector("#texto-resultado");

function encriptarTexto(){
    if (!estaVacio()){
        textoResultado.textContent=encriptar(texto.value);
        ocultarConjunto();
    }    
}

function desencriptarTexto(){
    if (!estaVacio()){
        textoResultado.textContent=desencriptar(texto.value);
        ocultarConjunto();
    }
}

texto.addEventListener("keypress", event => {
   event.key.toLowerCase();
})

botonEnc.addEventListener("click", ()=> {
    encriptarTexto();
});

botonDes.addEventListener("click", ()=> {
    desencriptarTexto();
});

botonCopiar.addEventListener("click", ()=> {
    copiar();
})
