# Sistema Innova ESPE 2026

Prototipo funcional desarrollado en **JavaScript nativo** para la gestión de venta de entradas, aplicación de descuentos por categoría y control de aforo del evento académico **Innova ESPE 2026**, de la Universidad de las Fuerzas Armadas – ESPE.

## Estructura del proyecto

```text
MEDINA_JOSEPH_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```

## Ejecución del proyecto

1. Abrir el archivo `index.html` en un navegador web moderno (Google Chrome, Microsoft Edge o Mozilla Firefox).
2. Interactuar con el sistema mediante los cuadros de diálogo emergentes (`prompt` y `alert`).
3. Opcionalmente, abrir las herramientas de desarrollador (`F12`) y acceder a la pestaña **Consola** para visualizar el registro detallado de las operaciones mediante `console.log()`.

## Reglas de negocio implementadas

| Parámetro | Valor |
|---|---:|
| Precio base por entrada | $20.00 |
| Cupos iniciales | 50 |
| Cantidad mínima por transacción | 1 entrada |
| Cantidad máxima por transacción | 5 entradas |

### Descuentos por categoría

| Categoría | Descuento |
|---|---:|
| Estudiante | 30 % |
| Docente | 15 % |
| Público general | 0 % |

## Escenarios de validación

Se realizaron pruebas para verificar el correcto funcionamiento de las reglas de negocio, los cálculos y las validaciones del sistema.

| Escenario | Resultado esperado | Estado |
|---|---|---|
| Compra de 3 entradas como estudiante | Subtotal: $60.00, descuento: $18.00, total: $42.00 | Verificado |
| Compra de 2 entradas como docente | Subtotal: $40.00, descuento: $6.00, total: $34.00 | Verificado |
| Compra de 1 entrada como público general | Subtotal: $20.00, descuento: $0.00, total: $20.00 | Verificado |
| Solicitud de 0 o 6 entradas | Compra rechazada sin modificar los contadores | Verificado |
| Ingreso de texto o valores decimales en la cantidad | Compra rechazada sin modificar los contadores | Verificado |
| Solicitud superior a los cupos disponibles | Compra rechazada sin modificar los contadores | Verificado |
| Selección de una opción de menú inexistente | Mensaje de error y retorno al menú principal | Verificado |
| Selección de la opción 4 (Salir) | Presentación del resumen final y finalización de la ejecución | Verificado |

## Autor

**Joseph Benjamín Medina Sánchez**  
Estudiante de Ingeniería de Software  
Universidad de las Fuerzas Armadas – ESPE

## Control de versiones

Registrar el **Commit 5**, fusionar la rama `develop` en `main` y publicar ambas ramas en el repositorio remoto.