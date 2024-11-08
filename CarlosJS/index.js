let entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado");
const boton = document.getElementById("Calcular");
const porcentajeSelect = document.getElementById("porcentaje");

function CalcularPrestamo() {
    const monto = parseFloat(entrada.value);
    const porcentaje = parseFloat(porcentajeSelect.value);
    
    if (isNaN(monto) || monto <= 0) {
        resultado.textContent = "Por favor, ingresa un monto válido.";
        resultado.style.color = "#ff4d4d";
    } else {
        const calculo = monto * porcentaje;
        resultado.textContent = `El ${porcentaje * 100}% de tu préstamo es: $${calculo.toFixed(2)}`;
        resultado.style.color = "#34d399";
    }
}

boton.addEventListener("click", CalcularPrestamo);
