import { equipos } from "../datos/equipos.js";

export function Notebooks() {
  return (
    <section>
      <div className="encabezado-pagina">
        <p className="etiqueta">Grupo 4</p>
        <h2>Notebooks y accesorios</h2>
        <p>
          Módulo para registrar equipos, consultar estados y simular movimientos
          de gabinete.
        </p>
      </div>

      <div className="panel">
        <h3>Registrar equipo</h3>
        <form className="formulario grilla-formulario">
          <label>
            Código interno
            <input type="text" placeholder="NB-001" />
          </label>
          <label>
            Tipo
            <select>
              <option>Notebook</option>
              <option>Cargador</option>
              <option>Mouse</option>
              <option>Otro accesorio</option>
            </select>
          </label>
          <label>
            Estado
            <select>
              <option>Disponible</option>
              <option>En uso</option>
              <option>En reparación</option>
              <option>Fuera de servicio</option>
            </select>
          </label>
          <label>
            Ubicación
            <input type="text" placeholder="Gabinete, aula, laboratorio" />
          </label>
          <button type="button">Guardar</button>
        </form>
      </div>

      <div className="panel">
        <h3>Listado de equipos</h3>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Tipo</th>
              <th>Marca</th>
              <th>Estado</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((equipo) => (
              <tr key={equipo.id}>
                <td>{equipo.codigo}</td>
                <td>{equipo.tipo}</td>
                <td>{equipo.marca}</td>
                <td>{equipo.estado}</td>
                <td>{equipo.ubicacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
