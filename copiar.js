const texto=document.querySelector("textarea");
const textoResultado = document.querySelector("#texto-resultado");

export default function copiar() {
    const resultado = textoResultado.textContent;
    if (!resultado) {
        return;
    }
    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert("Texto copiado al portapapeles");
            texto.value = "";
            texto.focus();
        })
        .catch(() => {
            alert("Algo salió mal");
        })
}