import { usuariosSimulados } from "../../../datos/usuariosSimulados.js";

export function Login({ cambiarPantalla }) {
  const usuarioDemo = usuariosSimulados[0];

  function iniciarSesion(evento) {
    evento.preventDefault();
    cambiarPantalla("inicio");
  }

  return (
    <section className="login-contenedor">
      <div className="login-panel">
        <p className="etiqueta">Proyecto integrador</p>
        <h1>Sistema de Gestión Escolar</h1>
        <p>
          Prototipo frontend para organizar laboratorio, comedor, usuarios y
          notebooks.
        </p>

        <form className="formulario" onSubmit={iniciarSesion}>
          <label>
            Usuario
            <input defaultValue={usuarioDemo.usuario} type="text" />
          </label>
          <label>
            Contraseña
            <input defaultValue={usuarioDemo.clave} type="password" />
          </label>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </section>
  );
}
