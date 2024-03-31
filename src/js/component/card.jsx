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
        <Link to={`/editForm/${props.id}`}>
				<button className="btn btn-link">or get back to contacts.</button>
			</Link>

        {/* <button class='btn btn-danger' onClick={() => {actions.editContact(props.id)}}>Editar Contacto</button> */}

      </div>

      <button class='btn btn-danger' onClick={() => {actions.deleteContact(props.id)}}>Borrar</button>

    </div>
)
}
export default Card;