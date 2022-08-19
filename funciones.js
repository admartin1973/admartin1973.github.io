const texto=document.querySelector("textarea");
const botonCopiar = document.querySelector("#copiar");
const textoResultado = document.querySelector("#texto-resultado");
const muneco = document.querySelector("#muneco"); 
const tituloAyuda = document.querySelector("#titulo-ayuda");
const ayuda = document.querySelector("#ayuda");


export function encriptar(texto){
    let resultado = texto.toLowerCase();
    const reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i=0; i<reglas.length; i++){
        resultado = resultado.replaceAll(reglas[i][0], reglas[i][1]);
    }
    return resultado;
}

export function desencriptar(texto){
    let resultado = texto.toLowerCase();
    const reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i=0; i<reglas.length; i++){
        resultado = resultado.replaceAll(reglas[i][1], reglas[i][0]);
    }
    return resultado;
}

export function visualizarConjuto(){
    if (screen.width > 768) {
        muneco.style.display = "block";
    } 
    tituloAyuda.style.display = "block";
    ayuda.style.display = "block";
    textoResultado.style.display = "none";
    botonCopiar.style.display = "none";
}

export function ocultarConjunto(){
    muneco.style.display = "none";
    tituloAyuda.style.display = "none";
    ayuda.style.display = "none";
    textoResultado.style.display = "block";
    botonCopiar.style.display = "block";
}

export function estaVacio(){
    if (texto.value == ""){
        visualizarConjuto();
        textoResultado.textContent="";
        return true;
    }
    return false;
}

