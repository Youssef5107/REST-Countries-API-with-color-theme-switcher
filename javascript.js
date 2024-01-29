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
						<div class="card-detail">Population: <span class="detail">${data[i].population}</span></div>
						<div class="card-detail">Region: <span class="detail">${data[i].region}</span></div>
						<div class="card-detail">Capital: <span class="detail">${data[i].capital}</span></div>
					</div>
				</div>		
		`
	}

	card.innerHTML = content;
}


get()

