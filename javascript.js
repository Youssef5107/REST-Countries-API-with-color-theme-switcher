async function get() {
	const response = await fetch("data.json");
	const data = await response.json();


	getInnerCards(data);


}

function getInnerCards(data) {
	var card = document.querySelector("#card-container");

	var content = "";
	for (i = 0; i < data.length; i++) {
		content = content + `
				<div class="card">
					<img src="${data[i].flags.svg}"class="img-card">
					<div class="card-details-area">
						<div class="country-name">${data[i].name}</div>
						<div class="card-detail">${data[i].population}</div>
						<div class="card-detail">${data[i].region}</div>
						<div class="card-detail">${data[i].capital}</div>
					</div>
				</div>		
		`
	}

	card.innerHTML = content;
}


get()

