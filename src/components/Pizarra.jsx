import { Nota } from "./Nota";
import { useState } from 'react';
import { v4 as uuid } from 'uuid'

export function Pizarra() {

    const [listaNotas,setNotas] = useState([
        {
            id:uuid(),
            titulo:'Titulo 1',
            descripcion:'Descripcion Normal',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Titulo 2',
            descripcion:'Descripcion Importante',
            importancia:true
        },
        {
            id:uuid(),
            titulo:'Relleno 3',
            descripcion:'Relleno Importante',
            importancia:true
        },
        {
            id:uuid(),
            titulo:'Relleno 4',
            descripcion:'Relleno Normal',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Relleno 5',
            descripcion:'Relleno Importante',
            importancia:true
        },
        {
            id:uuid(),
            titulo:'Relleno 6',
            descripcion:'Relleno Normal',
            importancia:false
        },
        {
            id:uuid(),
            titulo:'Relleno 7',
            descripcion:'Relleno Importante',
            importancia:true
        },
        {
            id:uuid(),
            titulo:'Relleno 8',
            descripcion:'Relleno Normal',
            importancia:false
        }
    ])

  return <div className="container">
      <div>
        <h1>Post It Simulator!</h1>
        <div className="formulario">
          <input type="text" className="form-control" placeholder="Titulo" />
          <input type="text" className="form-control" placeholder="Descripcion" />
          <div>
            <input type="checkbox"/>
            <label>Importante!</label>
          </div>
          <button className="btn">Agregar</button>
        </div>
      </div>
      <div className="contenedor-flex">
        {
            listaNotas.map((nota)=>(<Nota nota={nota} setNotas={setNotas}/>))
        }
      </div>
    </div>;
}
