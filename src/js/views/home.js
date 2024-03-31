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
return (
	<div className="text-center mt-5">
	  {store.contacts.map((item, index) => (
		<Card
		  nombre={item.full_name}
		  email={item.email}
		  phoneNumber={item.phone}
		  address={item.address}
		  key={index}
		  id={item.id}
		/>
	  ))}

	</div>
)};
  
