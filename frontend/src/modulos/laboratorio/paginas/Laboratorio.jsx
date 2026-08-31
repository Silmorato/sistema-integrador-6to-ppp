import { turnosLaboratorio } from "../datos/turnosLaboratorio.js";

export function Laboratorio() {
  return (
    <section>
      <div className="encabezado-pagina">
        <p className="etiqueta">Grupo 2</p>
        <h2>Turnos de laboratorio</h2>
        <p>
          Módulo para cargar, listar, editar o cancelar turnos de laboratorio.
        </p>
      </div>

      <div className="panel">
        <h3>Nuevo turno</h3>
        <form className="formulario grilla-formulario">
          <label>
            Fecha
            <input type="date" />
          </label>
          <label>
            Hora
            <input type="time" />
          </label>
          <label>
            Profesor
            <input type="text" placeholder="Nombre del profesor" />
          </label>
          <label>
            Curso
            <input type="text" placeholder="Curso" />
          </label>
          <button type="button">Guardar</button>
        </form>
      </div>

      <div className="panel">
        <h3>Listado de turnos</h3>
        <TablaTurnos turnos={turnosLaboratorio} />
      </div>
    </section>
  );
}

function TablaTurnos({ turnos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Profesor</th>
          <th>Curso</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {turnos.map((turno) => (
          <tr key={turno.id}>
            <td>{turno.fecha}</td>
            <td>{turno.hora}</td>
            <td>{turno.profesor}</td>
            <td>{turno.curso}</td>
            <td>{turno.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
