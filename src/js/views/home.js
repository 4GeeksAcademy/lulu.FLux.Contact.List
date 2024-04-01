import React, { useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts(); 
		console.log(store.contacts);

}, []);

useEffect(() => {
	console.log(store.contacts);
	

}, [store.contacts]);
return (
	<div className="text-center mt-5">

	   {store.contacts?.length > 0 ?
		store.contacts.map((item, index) => (
		<Card
		  nombre={item.name}
		  email={item.email}
		  phoneNumber={item.phone}
		  address={item.address}
		  key={index}
		  id={item.id}
		/>
	  )): "no hay contacto"} 

	</div>
)};
  
