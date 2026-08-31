import { modulos } from "../../../datos/modulos.js";
import { TarjetaModulo } from "../../../componentes/TarjetaModulo.jsx";

export function Inicio({ cambiarPantalla }) {
  const accesos = modulos.filter((modulo) => modulo.id !== "inicio");

  return (
    <section>
      <div className="encabezado-pagina">
        <p className="etiqueta">Inicio</p>
        <h2>Panel general del sistema</h2>
        <p>
          Desde acá se accede a los módulos. Este grupo también puede sumar
          novedades, calendario, accesos rápidos y vistas según rol.
        </p>
      </div>

      <div className="grilla-tarjetas">
        {accesos.map((modulo) => (
          <TarjetaModulo
            key={modulo.id}
            titulo={modulo.nombre}
            descripcion={modulo.descripcion}
            responsable={modulo.responsable}
            onClick={() => cambiarPantalla(modulo.id)}
          />
        ))}
      </div>
    </section>
  );
}
