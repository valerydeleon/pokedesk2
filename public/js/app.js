

var cargarPagina = function(){
	// $(document).on("click", ".pokemon", mostrarPokemones);
	obtenerNombresPokemones();
};


var obtenerNombresPokemones = function(){
	var url = "http://pokeapi.co/api/v2/pokemon/";
	$.getJSON(url, function (response){
		var pokemones = response.results;
		crearPokemones(pokemones);
	});
};


var plantillaContenedorPokemon =
	'<div id="pokemon" class="contenedorPokemon">' +
			'<img class="img-pokemon" src="../public/assets/img/__imgPokemon__.png" alt="__nombredePokemon__">' +
			'<div id="contNombre">' +
					'<h4 id="nombrePokemon">__nombrePokemon__</h4>' +
			'</div>' +
	'</div>';

var crearPokemones = function(pokemones){
	var $contenedorDePokemones = $('#contenedorPokemones');
	var planillaHTML = " ";

	pokemones.forEach(function(pokemon, index){
		planillaHTML += plantillaContenedorPokemon.replace('__nombrePokemon__', pokemon.name)
		.replace('__imgPokemon__', pokemon.name).replace('__nombredePokemon__', pokemon.name)
		console.log(planillaHTML)
	});
	$contenedorDePokemones.html(planillaHTML);
};

$(document).ready(cargarPagina);

// function crearPokemon(nombrePokemon){
// 	var contNombre = document.getElementById("contNombre");
// // console.log(nombrePokemon)
// 	nombrePokemon.forEach(function (pokemon){
// 		var nombre = document.createElement("h4");
// 		nombre.textContent = pokemon.name;
// 		nombre.className = "pokemon"
//
// 		contNombre.appendChild(nombre);
// 	});
// }


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

// function crearPokemons(pokemons) {
// 	var ul = document.getElementById("pokemons");
//
// 	pokemons.forEach(function (pokemon) {
// 		var li = document.createElement("li");
// 		li.textContent = pokemon.name;
//
// 		ul.appendChild(li);
// 	});
// }
