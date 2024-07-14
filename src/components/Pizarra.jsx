import { Nota } from "./Nota";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export function Pizarra() {
  const [listaNotas, setNotas] = useState([
    {
      id: uuid(),
      titulo: "Subir las notas",
      descripcion: "Antes de fin de semestre",
      importancia: false,
    },
    {
      id: uuid(),
      titulo: "Regar las plantas",
      descripcion: "Dia por medio",
      importancia: true,
    },
    {
      id: uuid(),
      titulo: "Renovar Tarjeta",
      descripcion: "Antes de fin de mes que se esta por vencer.",
      importancia: false,
    },
    {
      id: uuid(),
      titulo: "Cambiar Aceite Auto",
      descripcion: "Preguntar a mi viejo donde lo llevo.",
      importancia: false,
    },
    {
      id: uuid(),
      titulo: "Comprar Regalo",
      descripcion: "Buscar el fin de semana para que llegue",
      importancia: false,
    },
    {
      id: uuid(),
      titulo: "Subir Material",
      descripcion: "Comprimir y subir materiales",
      importancia: false,
    },
    {
      id: uuid(),
      titulo: "Ordenar 3er Piso",
      descripcion: "Mueble de las consolas?",
      importancia: false,
    },
    {
      id: uuid(),
      titulo: "Ir al Aeropuerto",
      descripcion: "Proximo Miercoles 13 hrs",
      importancia: true,
    },
  ]);
  const [mensaje,setMensaje] = useState('');

  const tituloRef = useRef();
  const descripcionRef = useRef();
  const importanciaRef = useRef();

  function agregarNota() {
    const titulo = tituloRef.current.value;
    const descripcion = descripcionRef.current.value;
    const importancia = importanciaRef.current.checked;

    if (descripcion.trim() !== "") {
      const newNota = {
        id: uuid(),
        titulo: titulo,
        descripcion: descripcion,
        importancia: importancia,
      };
      setNotas([...listaNotas, newNota]);

      /* Limpiar inputs cuando se agrega la tarea */
      tituloRef.current.value = "";
      descripcionRef.current.value = "";
      importanciaRef.current.checked = false;
    } else {
        setMensaje('Es necesario ingresar la descripcion');
        setTimeout(()=>{
            setMensaje('')
        },5000)
    }
  }

  function updateNotas(id) {
    const eliminar = listaNotas.find((n) => n.id === id);
    const newList = [...listaNotas];
    newList.splice(listaNotas.indexOf(eliminar), 1);
    setNotas(newList);
  }

  return (
    <div className="container">
      <div>
        <h1 className="H1">Post It Simulator!</h1>
        <div className="formulario">
          <input
            ref={tituloRef}
            type="text"
            className="form-control inpt1"
            placeholder="Titulo"
          />
          <input
            ref={descripcionRef}
            type="text"
            className="form-control inpt2"
            placeholder="Descripcion"
          />
          <div className="casilla">
            <input ref={importanciaRef} type="checkbox" />
            <label>Importante!</label>
          </div>
          <button onClick={agregarNota} className="btn gris">
            Agregar
          </button>
        </div>
        <div className="errorDescripcion alert alert-danger mt-2" role="alert" hidden={!mensaje}>
            {mensaje}
        </div>
      </div>
      <div className="contenedor-flex">
        {listaNotas.map((nota) => (
          <Nota nota={nota} updateNotas={updateNotas} />
        ))}
      </div>
    </div>
  );
}
