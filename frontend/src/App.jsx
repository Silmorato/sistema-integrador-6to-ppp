import { useState } from "react";
import { modulos } from "./datos/modulos.js";
import { LayoutPrincipal } from "./componentes/LayoutPrincipal.jsx";
import { Inicio } from "./modulos/autenticacion/paginas/Inicio.jsx";
import { Login } from "./modulos/autenticacion/paginas/Login.jsx";
import { Usuarios } from "./modulos/autenticacion/paginas/Usuarios.jsx";
import { Laboratorio } from "./modulos/laboratorio/paginas/Laboratorio.jsx";
import { Comedor } from "./modulos/comedor/paginas/Comedor.jsx";
import { Notebooks } from "./modulos/notebooks/paginas/Notebooks.jsx";

const pantallas = {
  login: Login,
  inicio: Inicio,
  usuarios: Usuarios,
  laboratorio: Laboratorio,
  comedor: Comedor,
  notebooks: Notebooks,
};

export default function App() {
  const [pantallaActual, setPantallaActual] = useState("login");
  const Pantalla = pantallas[pantallaActual] ?? Inicio;

  return (
    <LayoutPrincipal
      modulos={modulos}
      pantallaActual={pantallaActual}
      cambiarPantalla={setPantallaActual}
    >
      <Pantalla cambiarPantalla={setPantallaActual} />
    </LayoutPrincipal>
  );
}
