import { Nota } from "./Nota";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function Pizarra() {

    const [listaNotas,setNotas] = useState([
        {
            id:uuid(),
            titulo:'Subir las notas',
            descripcion:'Antes de fin de semestre',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Regar las plantas',
            descripcion:'Dia por medio',
            importancia:true
        },
        {
            id:uuid(),
            titulo:'Renovar Tarjeta',
            descripcion:'Antes de fin de mes que se esta por vencer.',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Cambiar Aceite Auto',
            descripcion:'Preguntar a mi viejo donde lo llevo.',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Comprar Regalo',
            descripcion:'Buscar el fin de semana para que llegue',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Subir Material',
            descripcion:'Comprimir y subir materiales',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Ordenar 3er Piso',
            descripcion:'Mueble de las consolas?',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Ir al Aeropuerto',
            descripcion:'Proximo Miercoles 13 hrs',
            importancia:true
        }
    ])

    function updateNotas(id) {
        const eliminar = listaNotas.find(n=>n.id === id);
        const newList = [...listaNotas];
        newList.splice(listaNotas.indexOf(eliminar),1);
        setNotas(newList)
    }

  return <div className="container">
      <div>
        <h1 className="H1">Post It Simulator!</h1>
        <div className="formulario">
          <input type="text" className="form-control inpt1" placeholder="Titulo" />
          <input type="text" className="form-control inpt2" placeholder="Descripcion" />
          <div className="casilla">
            <input type="checkbox"/>
            <label>Importante!</label>
          </div>
          <button className="btn gris">Agregar</button>
        </div>
      </div>
      <div className="contenedor-flex">
        {
            listaNotas.map((nota)=>(<Nota nota={nota} updateNotas={updateNotas}/>))
        }
      </div>
    </div>;
}
