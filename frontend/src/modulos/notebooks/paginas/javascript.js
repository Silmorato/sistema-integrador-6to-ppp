
const formulario = document.getElementById("formNotebook");
const lista = document.getElementById("listaNotebooks");
const movimientos = document.getElementById("listaMovimientos");

let notebooks = [];
let historial = [];

function registrarMovimiento(texto) {
    const fecha = new Date().toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });

    historial.unshift({ texto: texto, fecha: fecha });
    historial = historial.slice(0, 8);

    movimientos.innerHTML = "";

    historial.forEach(movimiento => {
        const li = document.createElement("li");
        const descripcion = document.createElement("span");
        const hora = document.createElement("span");

        descripcion.textContent = movimiento.texto;
        hora.textContent = movimiento.fecha;
        hora.className = "movimiento-hora";

        li.appendChild(descripcion);
        li.appendChild(hora);
        movimientos.appendChild(li);
    });
}

function claseEstado(estado) {
    if (estado === "Disponible") return "estado-disponible";
    if (estado === "En uso") return "estado-en-uso";
    return "estado-fuera";
}

function actualizarTabla() {
    lista.innerHTML = "";

    notebooks.sort((a, b) => a.numero - b.numero);

    notebooks.forEach(notebook => {
        const fila = document.createElement("tr");

        const celdaNumero = document.createElement("td");
        celdaNumero.textContent = notebook.numero;

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = notebook.nombre;

        const celdaEstado = document.createElement("td");
        const etiqueta = document.createElement("span");
        etiqueta.className = "estado " + claseEstado(notebook.estado);
        etiqueta.textContent = notebook.estado;
        celdaEstado.appendChild(etiqueta);

        const celdaAccion = document.createElement("td");
        const boton = document.createElement("button");
        boton.textContent = "Cambiar";
        boton.className = "btn-cambiar";

        boton.addEventListener("click", function() {
            const opciones = [
                "Disponible",
                "En uso",
                "Fuera de servicio"
            ];

            const actual = opciones.indexOf(notebook.estado);
            const siguiente = opciones[(actual + 1) % opciones.length];
            const anterior = notebook.estado;

            notebook.estado = siguiente;

            registrarMovimiento(
                notebook.nombre + ": " + anterior + " → " + siguiente
            );

            actualizarTabla();
        });

        celdaAccion.appendChild(boton);

        fila.append(
            celdaNumero,
            celdaNombre,
            celdaEstado,
            celdaAccion
        );

        lista.appendChild(fila);
    });

    document.getElementById("total").textContent = notebooks.length;

    document.getElementById("cantidadDisponible").textContent =
        notebooks.filter(n => n.estado === "Disponible").length;

    document.getElementById("cantidadEnUso").textContent =
        notebooks.filter(n => n.estado === "En uso").length;

    document.getElementById("cantidadFuera").textContent =
        notebooks.filter(n => n.estado === "Fuera de servicio").length;
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const numero = Number(document.getElementById("numero").value);
    const estado = document.getElementById("estado").value;

    if (!nombre || !Number.isInteger(numero) || numero < 1) {
        alert("Ingresá un nombre y un número válido.");
        return;
    }

    if (notebooks.some(n => n.numero === numero)) {
        alert("Ya existe una notebook con ese número.");
        return;
    }

    notebooks.push({ nombre, numero, estado });

    registrarMovimiento(
        "Se registró " + nombre + " (N.º " + numero + "), estado: " + estado
    );

    actualizarTabla();
    formulario.reset();
});
