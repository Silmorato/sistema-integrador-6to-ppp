export function TarjetaModulo({ titulo, descripcion, responsable, onClick }) {
  return (
    <article className="tarjeta-modulo">
      <div>
        <p className="etiqueta">{responsable}</p>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      <button onClick={onClick}>Entrar</button>
    </article>
  );
}
