export function Nota({ nota, setNotas }) {
  const { id, titulo, descripcion, importancia } = nota;

  if (importancia) {
    return (
      <div className="rojo nota">
        <div>
          <div className="titulo">{titulo}</div>
          <div>
            <button>X</button>
          </div>
        </div>
        <div>{descripcion}</div>
      </div>
    );
  }

  return (
    <div className="amarillo nota">
      <div>
        <div className="titulo">{titulo}</div>
        <div>
          <button>X</button>
        </div>
      </div>
      <div>{descripcion}</div>
    </div>
  );
}
