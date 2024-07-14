/* Grupo:
    - Ariel Lagos
    - Francisco Lagos
*/

export function Nota({ nota, updateNotas }) {
  const { id, titulo, descripcion, importancia } = nota;
  let clase = "";
  const x1 = Math.random()*10;
  const x2 = Math.random()*10;

  /* Asigna el color */
  if (importancia) {
    clase += "rojo nota";
  } else {
    clase += "amarillo nota";
  }

  /* Asigna la rotacion de las notas */
  if (x1 <= 5) {
    if (x2 <= 3) {
      clase += " rotar1";
    } else if (x2 <= 6) {
      clase += " rotar2";
    } else {
      clase += " rotar2";
    }
  } else {
    if (x2 <= 3) {
      clase += " rotar4";
    } else if (x2 <= 6) {
      clase += " rotar5";
    } else {
      clase += " rotar6";
    }
  }

  const eliminarNota = () => updateNotas(id);

  return (
    <div className={clase}>
      <div>
        <div className="titulo">{titulo}</div>
        <div className="X">
          <button onClick={eliminarNota} className="btn">
            X
          </button>
        </div>
      </div>
      <div className="descripcion">{descripcion}</div>
    </div>
  );
}
