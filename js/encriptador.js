//------- Selección de Elementos del DOM -------//

const inputTexto = document.querySelector(".input-texto");
const btnEncriptar = document.querySelector(".btn-encriptar");
const resultado = document.querySelector(".resultado");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const contenedorTarjeta = document.querySelector(".contenedor-tarjeta");

//------- Funciones de Encriptación y Desencriptación -------//

function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoOriginal;
}

//------- Eventos -------//

btnEncriptar.addEventListener("click", () => {
    const texto = inputTexto.value;
    if (texto === "") {
        mostrarMensajeVacio();
    } else {
        resultado.value = encriptarTexto(texto);
        mostrarResultado();
    }
});

btnDesencriptar.addEventListener("click", () => {
    const texto = inputTexto.value;
    if (texto === "") {
        mostrarMensajeVacio();
    } else {
        resultado.value = desencriptarTexto(texto);
        mostrarResultado();
    }
});

btnCopiar.addEventListener("click", () => {
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
});

//------- Funciones para Manejo de la Interfaz -------//

function mostrarMensajeVacio() {
    contenedorTarjeta.style.display = "block";
    resultado.style.display = "none";
    btnCopiar.style.visibility = "hidden";
}

function mostrarResultado() {
    contenedorTarjeta.style.display = "none";
    resultado.style.display = "block";
    btnCopiar.style.visibility = "visible";
}
function ajustarTamañoTexto() {
    const anchoVentana = window.innerWidth;
    
    if (anchoVentana < 600) {
        resultado.style.fontSize = "14px";
    } else {
        resultado.style.fontSize = "16px";
    }
}

// Llamar a la función cuando la ventana cambia de tamaño
window.addEventListener("resize", ajustarTamañoTexto);

// También la llamamos al cargar la página
window.addEventListener("load", ajustarTamañoTexto);
