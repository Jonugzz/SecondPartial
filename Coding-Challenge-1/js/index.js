function watchForm() {
	let pokeform = document.getElementById('form');
	
	pokeform.addEventListener('submit', ( event ) => {
		event.preventDefault();
		
		let poke = document.getElementById('query').value;
		let result = document.getElementById('res');
		
		let url = "https://pokeapi.cohttps://pokeapi.co/api/v2/pokemon/" + `${poke}/`;
		
		
		fetch( url, 'GET' ) {
			.then( response => {
				result.innerHTML = `<div> ${response.name} </div>
									<img> ${resonse.spirits[0] </img>
									<div> ${response.moves} </div>
									<div> ${response.stats} </div>`;
			})
			.catch( err => {
				result.innerHTML = "Something went wrong";
			})
		});
		
	}
	
}

function init() {
	watchForm();
}

init();