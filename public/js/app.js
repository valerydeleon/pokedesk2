$.getJSON("http://pokeapi.co/api/v2/pokemon/", 
	function (response) {
	var pokemons = response.results;
	crearPokemons(pokemons);
});

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function (e) {
// 	if (this.readyState === 4) {
// 		if (this.status === 200) {
			// var response = JSON.parse(this.response);
			// var pokemons = response.results;
			// var squads = JSON.parse(this.response);	
			// crearPokemons(pokemons);
// 		}
		
// 	}
// };

// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

// xhr.send();

function crearPokemons(pokemons) {
	var ul = document.getElementById("pokemons");

	pokemons.forEach(function (pokemon) {
		var li = document.createElement("li");
		li.textContent = pokemon.name;

		ul.appendChild(li);
	});
}








