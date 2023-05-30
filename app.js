// Variables de los inputs
const hijoError = document.querySelector("#error");
const inputEntrada = document.querySelector("#entrada");
const contenedorSalida = document.querySelector("#contenedor__salida");
const contenedorImg = document.querySelector("#imagen");
const inputSalida = document.querySelector("#salida");
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector("#copiar");

// Eventos
inputEntrada.addEventListener("input", verficarInput);
encriptar.addEventListener("click", encriptarTxt);
desencriptar.addEventListener("click", desencriptarTxt);

copiar.addEventListener("click", function() {
    navigator.clipboard.writeText(inputSalida.textContent);  // guarda el texto en el porta papeles
    copiar.value = "copiado";
    setTimeout(() => {
        copiar.value = "copiar";
    }, 3000);
})

// verifica que el textarea no este vacio
function verficarInput(e) {
  const valueEntrada = e.target.value.toLowerCase();
  if (valueEntrada !== "") {
    encriptar.disabled = false;
    desencriptar.disabled = false;
    encriptar.classList.add("activo");
    return;
  }

  encriptar.disabled = true;
  desencriptar.disabled = true;
  encriptar.classList.remove("activo");
  mostrarError("El campo no puede ir vacio");
}


// Encripta el texto
function encriptarTxt() {
  const texto = inputEntrada.value.toLowerCase();

  let txtCifrado = texto.replace(/e/gim, "enter");
  txtCifrado = txtCifrado.replace(/o/gim, "ober");
  txtCifrado = txtCifrado.replace(/i/gim, "imes");
  txtCifrado = txtCifrado.replace(/a/gim, "ai");
  txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  // quitar el display none y se muestre el textarea
  contenedorSalida.classList.remove("d-none");

  // Agregar el display none a la imagen y texto

  contenedorImg.classList.add("d-none");

  // Agregar el texto al otro text area de salida
  inputSalida.innerHTML = txtCifrado;
}

// desencriptar texto
function desencriptarTxt() {
  const texto = inputEntrada.value.toLowerCase();

  let txtCifrado = texto.replace(/enter/gim, "e");
  txtCifrado = txtCifrado.replace(/ober/gim, "o");
  txtCifrado = txtCifrado.replace(/imes/gim, "i");
  txtCifrado = txtCifrado.replace(/ai/gim, "a");
  txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  // quitar el display none y se muestre el textarea
  contenedorSalida.classList.remove("d-none");

  // Agregar el display none a la imagen y texto

  contenedorImg.classList.add("d-none");

  // Agregar el texto al otro text area de salida
  inputSalida.innerHTML = txtCifrado;
}

// Mostrar alertas
function mostrarError(mensaje) {
  const error = document.createElement("DIV");
  error.classList.add("error");
  error.innerHTML = `
        <p>
            ${mensaje}
        </p>
    `;
  hijoError.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 3000);
}
