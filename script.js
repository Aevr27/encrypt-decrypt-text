// Funciones de encriptación y desencriptación
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para encriptar y mostrar el resultado
function encriptar() {
    const inputText = document.getElementById("textInput").value;
    const encryptedText = encriptarTexto(inputText);
    mostrarResultado(encryptedText);
}

// Función para desencriptar y mostrar el resultado
function desencriptar() {
    const inputText = document.getElementById("textInput").value;
    const decryptedText = desencriptarTexto(inputText);
    mostrarResultado(decryptedText);
}

// Función para mostrar el resultado en la sección derecha y ocultar la imagen
function mostrarResultado(texto) {
    const placeholderImage = document.getElementById("placeholderImage");
    const outputText = document.getElementById("outputText");
    const copyButton = document.getElementById("copyButton");

    // Ocultar la imagen y mostrar el texto y el botón de copiar
    placeholderImage.style.display = "none";
    outputText.style.display = "block";
    outputText.value = texto;
    copyButton.style.display = "block";
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}
