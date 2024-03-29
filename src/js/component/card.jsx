import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Card = (props) => {
  const {store, actions}= useContext(Context)
  
  console.log(props)
  return(
    <div className="card">
      <div className="card-body">
        <p>{props.nombre}</p>
        <p>{props.email}</p>
        <p>{props.phoneNumber}</p>
        <p>{props.address}</p>
      </div>

      //boton aun no conectado al edit fetch, need const...

      <button class='btn btn-warning' onClick={() => {actions.(props.${id})}}>Editar</button>

      <button class='btn btn-danger' onClick={() => {actions.deleteContact(props.id)}}>Borrar</button>

    </div>
)
}
export default Card;