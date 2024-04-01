import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditForm = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState ("Nombre");
	const [emailAddress, setEmailAddress] = useState ("Email");
	const [phoneNumber, setPhoneNumber] = useState ("Telefono");
	const [streetAddress, setStreetAddress] = useState ("Address");
	const { id } = useParams();
	console.log(id);

	useEffect (() => {
		actions.getSingleContact(id);
		setFullName(store.contact.fullName);
		setEmailAddress(store.contact.email);
		setPhoneNumber(store.contact.phone);
		setStreetAddress(store.contact.address);

	}, []);

	const handleSubmit = e => {
		e.preventDefault();//este no siempre hace falta con React
		actions.editContact(fullName, emailAddress, streetAddress, phoneNumber, id);
		/* console.log(fullName); */
		
		setFullName("");//limpiar input
		setEmailAddress("");
		setPhoneNumber("");
		setStreetAddress("");
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="inputName" className="form-label"><em>Full Name</em></label>
					<input 
					type="text"
					className="form-control"
					id="exampleInputEmail"
					aria-describedby="emailHelp"
					value={fullName} //asignar valor
					onChange={e => setFullName(e.target.value)}
					placeholder="Jhon Wick"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="exampleinputPassword" className="form-label"><em>Email</em></label>
					<input 
					type="email"
					className="form-control"
					id="exampleInputPassword"
					value={emailAddress} //asignar valor
					onChange={e => setEmailAddress(e.target.value)}
					placeholder="Jhon@noemail.com"
					/>
					
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword" className="form-label"><em>Phone Number</em></label>
					<input 
					type="text"
					className="form-control"
					id="exampleInputPassword"
					value={phoneNumber} //asignar valor
					onChange={e => setPhoneNumber(e.target.value)}
					placeholder="666.222.222"
					/>
					
				</div>
				<div className="mb-3">
					<label htmlFor="emailAddress" className="form-label"><em>Street Address</em></label>
					<input 
					type="text"
					className="form-control"
					id="streetAddress"
					value={streetAddress} //asignar valor
					onChange={e => setStreetAddress(e.target.value)}
					placeholder="c/ 34 san jose spain"
					/>
					
				</div>
				<button type="submit" className="btn btn-primary">Save</button>
			</form>
			
			
			<br/>

				  {<Link to="/">
				<button className="btn btn-link">or get back to contacts.</button>
			</Link>}
		
		</div>
	);
};
