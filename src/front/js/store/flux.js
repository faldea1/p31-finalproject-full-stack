const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			linkTokenfromsessionStore: () => {

				const token = sessionStorage.getItem("token");
				if (token && token !="" && token!= undefined) setStore({ token: token });

			},

			logout: () => {

				sessionStorage.removeItem("token");
				setStore({ token: null });

			},

			login: async (email, password) => {

				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				};

				try {

					const response = await fetch('https://3001-faldea1-p31finalproyect-oudkkrtp38y.ws-us84.gitpod.io/api/token', options)
					if(response.status !== 200){
	
						alert("email &/|| password incorrect");
						return false;
					} 
	
					const data = await response.json();
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					return true;

				}
				catch(error){
					console.error("Trying log in, there has been an error")

				}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const store = getStore();

					const options = {
						headers: {
							"Authorization": "Bearer " + store.token
						}
					}
					const resp = await fetch('https://3001-faldea1-p31finalproyect-oudkkrtp38y.ws-us84.gitpod.io/api/hello', options)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
