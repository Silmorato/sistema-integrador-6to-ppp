import { reservasComedor } from "../datos/reservasComedor.js";

export function Comedor() {
  return (
    <section>
      <div className="encabezado-pagina">
        <p className="etiqueta">Grupo 3</p>
        <h2>Reservas de comedor</h2>
        <p>
          Módulo para cargar y consultar reservas o turnos del comedor escolar.
        </p>
      </div>

      <div className="panel">
        <h3>Nueva reserva</h3>
        <form className="formulario grilla-formulario">
          <label>
            Fecha
            <input type="date" />
          </label>
          <label>
            Turno
            <select>
              <option>Desayuno</option>
              <option>Almuerzo</option>
              <option>Merienda</option>
            </select>
          </label>
          <label>
            Curso
            <input type="text" placeholder="Curso" />
          </label>
          <label>
            Cantidad de alumnos
            <input type="number" min="1" />
          </label>
          <button type="button">Guardar</button>
        </form>
      </div>

      <div className="panel">
        <h3>Listado de reservas</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Turno</th>
              <th>Curso</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservasComedor.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.fecha}</td>
                <td>{reserva.turno}</td>
                <td>{reserva.curso}</td>
                <td>{reserva.cantidadAlumnos}</td>
                <td>{reserva.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
