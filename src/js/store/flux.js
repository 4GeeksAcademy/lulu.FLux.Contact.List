const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            // Use getActions to call a function within a function
            createContact: (fullName, emailAddress, address, phoneNumber) => {
                fetch('https://playground.4geeks.com/apis/fake/contact/', {
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
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/lulu2')
                    .then(response => response.json())
                    .then(data => {
						console.log(data);
						setStore({ contacts: data })} )
                    .catch(error => console.log('Error:', error));
            },
            editContact: (id, fullName, emailAddress, address, phoneNumber) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${id}`, {
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

