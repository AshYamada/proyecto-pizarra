export function Nota({ nota, updateNotas }) {
  const { id, titulo, descripcion, importancia } = nota;

  const eliminarNota = () => updateNotas(id);

  if (importancia) {
    return (
      <div className="rojo nota">
        <div>
          <div className="titulo">{titulo}</div>
          <div className="X">
            <button onClick={eliminarNota} className="btn">X</button>
          </div>
        </div>
        <div className="descripcion">
            {descripcion}
        </div>
      </div>
    );
  }

  return (
    <div className="amarillo nota">
      <div>
        <div className="titulo">{titulo}</div>
        <div className="X">
          <button onClick={eliminarNota} className="btn">X</button>
        </div>
      </div>
      <div className="descripcion">{descripcion}</div>
    </div>
  );
}
