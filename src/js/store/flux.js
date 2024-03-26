const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			createContact: (fullName, emailAddress,address,phoneNumber) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify ({
						"full_name": fullName,
						"email": emailAddress,
						"agenda_slug": "lulu",
						"address":address,
						"phone":phoneNumber
				})
			})
			.then(Response => Response.json())
			.then(data => consologe.log(data))
			.catch(error => console.log('Error', error));

			},
			getContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/')
				.then(Response => Response.json())
				.then(data => setStore({contacts: data}))
				.catch(error => console.log('Error:', error));

			},
			deleteContact: () => {
				

			}
			
		}
	};
};

export default getState;
