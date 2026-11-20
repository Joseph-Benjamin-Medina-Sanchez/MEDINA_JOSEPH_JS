const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;
const DESC_ESTUDIANTE = 0.30;
const DESC_DOCENTE = 0.15;
const DESC_GENERAL = 0.00;
const MAX_ENTRADAS = 5;

let cuposDisponibles = CUPOS_INICIALES;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;
let opcion = "";

do {
    opcion = prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Seleccione una opción:"
    );

    if (opcion === null) {
        opcion = "4";
    } else {
        opcion = opcion.trim();
    }

    switch (opcion) {
        case "1": {
            if (cuposDisponibles === 0) {
                alert("Compra rechazada: Evento agotado, no quedan cupos disponibles.");
                break;
            }

            const nombreInput = prompt("Ingrese el nombre del comprador:");
            if (nombreInput === null || nombreInput.trim() === "") {
                alert("Compra rechazada: Debe ingresar el nombre del comprador.");
                break;
            }
            const nombreComprador = nombreInput.trim();

            const tipoInput = prompt(
                "Ingrese el tipo de participante:\n" +
                "- Estudiante\n" +
                "- Docente\n" +
                "- Público general"
            );
            if (tipoInput === null || tipoInput.trim() === "") {
                alert("Compra rechazada: Debe especificar el tipo de participante.");
                break;
            }

            const tipoNormalizado = tipoInput
                .trim()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            let porcentajeDescuento = 0;
            let etiquetaTipo = "";

            if (tipoNormalizado === "estudiante") {
                porcentajeDescuento = DESC_ESTUDIANTE;
                etiquetaTipo = "Estudiante";
            } else if (tipoNormalizado === "docente") {
                porcentajeDescuento = DESC_DOCENTE;
                etiquetaTipo = "Docente";
            } else if (tipoNormalizado === "publico general") {
                porcentajeDescuento = DESC_GENERAL;
                etiquetaTipo = "Público general";
            } else {
                alert("Compra rechazada: Tipo de participante no válido. Use Estudiante, Docente o Público general.");
                break;
            }

            const cantidadInput = prompt("Ingrese la cantidad de entradas (1 a " + MAX_ENTRADAS + "):");
            if (cantidadInput === null || cantidadInput.trim() === "") {
                alert("Compra rechazada: Debe ingresar una cantidad numérica.");
                break;
            }

            const cantidad = Number(cantidadInput.trim());
            if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > MAX_ENTRADAS) {
                alert("Compra rechazada: La cantidad debe ser un número entero entre 1 y " + MAX_ENTRADAS + ".");
                break;
            }

            if (cantidad > cuposDisponibles) {
                alert("Compra rechazada: Cupos insuficientes. Cupos disponibles: " + cuposDisponibles + ".");
                break;
            }

            const subtotal = cantidad * PRECIO_ENTRADA;
            const montoDescuento = subtotal * porcentajeDescuento;
            const totalPagar = subtotal - montoDescuento;

            cuposDisponibles -= cantidad;
            entradasVendidas += cantidad;
            ingresosAcumulados += totalPagar;
            comprasRealizadas += 1;

            const resumenCompra =
                "SIMULACIÓN DE UNA COMPRA\n" +
                "Nombre: " + nombreComprador + "\n" +
                "Tipo de participante: " + etiquetaTipo + "\n" +
                "Cantidad de entradas: " + cantidad + "\n\n" +
                "Subtotal: $" + subtotal.toFixed(2) + "\n" +
                "Descuento (" + (porcentajeDescuento * 100) + " %): $" + montoDescuento.toFixed(2) + "\n" +
                "Total a pagar: $" + totalPagar.toFixed(2) + "\n\n" +
                "Compra realizada exitosamente.\n\n" +
                "Cupos restantes: " + cuposDisponibles;

            alert(resumenCompra);
            console.log(resumenCompra);
            break;
        }
        case "2":
            alert("Cupos disponibles: " + cuposDisponibles);
            break;
        case "3":
            alert("Ingresos acumulados: $" + ingresosAcumulados.toFixed(2));
            break;
        case "4":
            alert("Saliendo del sistema...");
            break;
        default:
            alert("Error: Opción de menú inexistente. Ingrese un número del 1 al 4.");
            console.log("Error: Opción inválida ingresada -> " + opcion);
            break;
    }
} while (opcion !== "4");