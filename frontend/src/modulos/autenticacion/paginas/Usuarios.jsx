const roles = [
  "Administrador",
  "Directivo",
  "Docente",
  "Preceptor",
  "Alumno",
  "Encargado de laboratorio",
  "Encargado de comedor",
  "Encargado de gabinete",
];

export function Usuarios() {
  return (
    <section>
      <div className="encabezado-pagina">
        <p className="etiqueta">Grupo 1</p>
        <h2>Usuarios y roles</h2>
        <p>
          En esta pantalla se puede simular qué tipos de usuarios existen y qué
          permisos visuales tendría cada uno.
        </p>
      </div>

      <div className="panel">
        <h3>Roles sugeridos</h3>
        <ul className="lista-columnas">
          {roles.map((rol) => (
            <li key={rol}>{rol}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
