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
        case "1":
            alert("Módulo de compra en construcción.");
            break;
        case "2":
            alert("Módulo de cupos en construcción.");
            break;
        case "3":
            alert("Módulo de ingresos en construcción.");
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