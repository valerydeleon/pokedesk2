var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var squads = JSON.parse(this.response);	
			crearSquads(squads);
		}
		
	}
};

xhr.open("GET", "data/squads.json");

xhr.send();

function crearSquads(squads) {
	var ul = document.getElementById("squads");

	squads.forEach(function (squad) {
		var li = document.createElement("li");
		li.textContent = squad.nombre;

		ul.appendChild(li);
	});
}








