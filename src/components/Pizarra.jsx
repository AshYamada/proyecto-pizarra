import { Nota } from "./Nota";

export function Pizarra() {
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
      <div>Notas</div>
    </div>;
}
