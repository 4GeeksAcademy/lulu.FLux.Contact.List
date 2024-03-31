const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            contact: {},
        },
        actions: {
            // Use getActions to call a function within a function
            createContact: (fullName, emailAddress, address, phoneNumber) => {
                fetch('https://playground.4geeks.com/contact/docs#/agendas/lulu', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "full_name": fullName,
                        "email": emailAddress,
                        "agenda_slug": "lulu2",
                        "address": address,
                        "phone": phoneNumber
                    })
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.log('Error', error));
            },
            getContacts: () => {
                fetch('https://playground.4geeks.com/contact/docs#/agendas/')
                /* fetch('https://playground.4geeks.com/apis/fake/contact/agenda/') */// this API it is DOWN///
                    .then(response => response.json())
                    .then(data => {
						/* console.log(data); */
						setStore({ contacts: data })} )
                    .catch(error => console.log('Error:', error));
            },
            getSingleContact: (id) => {
                fetch('https://playground.4geeks.com/contact/docs#/agenda/lulu/contacts')
               /*  fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${id}`) */
                    .then(response => response.json())
                    .then(data => setStore({ contact: data}) )
                    .catch(error => console.log('Error:', error));
            },
            editContact: (id, fullName, emailAddress, address, phoneNumber) => {
                fetch(`https://playground.4geeks.com/contact/docs#/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "full_name": fullName,
                        "email": emailAddress,
                        "agenda_slug": "lulu2",
                        "address": address,
                        "phone": phoneNumber
                    })
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.log('Error', error));
            },
            deleteContact: (id) => {
                // Implementation for deleteContact
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,{
					method:'DELETE'

				})
				.then(response => response.json())
                    .then(data => getActions().getContacts())
                    .catch(error => console.log('Error', error));
            }
        }
    };
};

export default getState;

