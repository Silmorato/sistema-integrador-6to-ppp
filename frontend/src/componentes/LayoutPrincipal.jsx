export function LayoutPrincipal({ modulos, pantallaActual, cambiarPantalla, children }) {
  const estaEnLogin = pantallaActual === "login";

  if (estaEnLogin) {
    return <main className="pantalla-login">{children}</main>;
  }

  return (
    <div className="layout">
      <aside className="barra-lateral">
        <div>
          <p className="etiqueta">Sistema</p>
          <h1>Gestión Escolar</h1>
        </div>

        <nav className="navegacion" aria-label="Módulos del sistema">
          {modulos.map((modulo) => (
            <button
              key={modulo.id}
              className={pantallaActual === modulo.id ? "activo" : ""}
              onClick={() => cambiarPantalla(modulo.id)}
            >
              {modulo.nombre}
            </button>
          ))}
        </nav>
      </aside>

      <main className="contenido">{children}</main>
    </div>
  );
}
