import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const {fullname, setFullName} = useState ("");
	const {emailAddress, setEmailAddress} = useState ("");
	const {phoneNumber, setPhoneNumber} = useState ("");
	const {streetAddress, setStreetAddress} = useState ("");

	const handleSubmit = e =>
		e.preventDefault();//este no siempre hace falta con React
		console.log(fullname);




		/* actions.addContact(fullname,emailAddress,phoneNumber,streetAddress);
		setFullName("");//limpiar input
		setEmailAddress("");
		setPhoneNumber("");
		setStreetAddress(""); */






	return (
		<div className="container">
			<form>
				<div className="mb-3">
					<label htmlFor="inputName" className="form-label"><em>Full Name</em></label>
					<input 
					type="text"
					className="form-control"
					id="inputName"
					aria-describedby="nameHelp"
					value={fullname} //asignar valor
					onChange={e => setFullName(e.target.value)}
					placeholder="Jhon Wick"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="emailAddress" className="form-label"><em>Email</em></label>
					<input 
					type="email"
					className="form-control"
					id="inputEmail"
					aria-describedby="emailHelp"
					value={emailAddress} //asignar valor
					onChange={e => setEmailAddress(e.target.value)}
					placeholder="Jhon@noemail.com"
					/>
					
				</div>
				<div className="mb-3">
					<label htmlFor="emailAddress" className="form-label"><em>Phone Number</em></label>
					<input 
					type="numbers"
					className="form-control"
					id="inputPhoneNumber"
					aria-describedby="phoneNumberHelp"
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
					aria-describedby="addressHelp"
					value={streetAddress} //asignar valor
					onChange={e => setStreetAddress(e.target.value)}
					placeholder="c/ 34 san jose spain"
					/>
					
				</div>
			</form>
			<button type="submit" className="btn btn-primary">Save</button>
			<br/>

			<button onClick={() => console.log(fullname)}

				  <Link to="/">
				<button className="btn btn-link">or get back to contacts.</button>
			</Link>
		
		</div>
	);
};
