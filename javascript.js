var data = null;

async function get() {
	const response = await fetch("data.json");
	data = await response.json();
	drawCountryCards(data);
}

get()

function drawCountryCards(data) {
	var card = document.querySelector("#card-container");

	var content = "";
	for (i = 0; i < data.length; i++) {
		content = content + `
				<div class="card" onclick="showCardDetails('${data[i].alpha3Code}')">
				<div class="card-img-area"><img src="${data[i].flags.svg}"class="img-card"></div>
					
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

function darkMode() {
	document.querySelector("body").classList.add("dark");
	document.querySelector(".dark-mode-btn-container").style.display = "none";
	document.querySelector(".light-mode-btn-container").style.display = "flex"
}

function lightMode() {
	document.querySelector("body").classList.remove("dark");
	document.querySelector(".dark-mode-btn-container").style.display = "flex";
	document.querySelector(".light-mode-btn-container").style.display = "none";
}

function showCardDetails(countryCode) {
	var mainArea = document.querySelector("main");
	var countryArea = document.querySelector(".country-details-area");
	mainArea.style.display = "none";
	countryArea.style.display = "block";

	var selectedCountry = data.find((country) => country.alpha3Code == countryCode);

	console.log("more than language", data.filter(c => c.languages.length > 1));
	console.log("more than currency", data.filter(c => c.currencies).filter(c => c.currencies.length > 1));

	var countryLanguages = "";
	if (selectedCountry.languages) {
		for (i = 0; i < selectedCountry.languages.length; i++) {
			countryLanguages = countryLanguages + ", " + selectedCountry.languages[i].name;
		}
	}

	var currenciesName = "";
	if (selectedCountry.currencies) {
		for (j = 0; j < selectedCountry.currencies.length; j++) {
			currenciesName = currenciesName + ", " + selectedCountry.currencies[j].name;
		}
	}

	var bordersNames = ""
	if (selectedCountry.borders) {
		for (l = 0; l < selectedCountry.borders.length; l++) {
			bordersNames = bordersNames + `<span class="secondary-btns">${selectedCountry.borders[l]} </span>`;
		}
	}


	countryArea.innerHTML = `
	<button onclick="hideCardDetails()" class="back"><img class="arrow"
				src="images/4829870_arrow_back_left_icon.png">Back</button>
	<div class="content-area">
			<img class="selected-country-flag" src="${selectedCountry.flags.svg}">
			<div class="details-area-container">
					<div class="selected-country-name">${selectedCountry.name}</div>
					<div class="selected-card-details-area">
						<div class="details-area1">
							<div class="selected-country-detail-title">Native Name: <span class="selected-county-detail">${selectedCountry.nativeName}</span></div>
							<div class="selected-country-detail-title">Top Level Domain: <span class="selected-county-detail">${selectedCountry.topLevelDomain}</span></div>
							<div class="selected-country-detail-title">Population: <span class="selected-county-detail">${selectedCountry.population}</span></div>
							<div class="selected-country-detail-title">Currencies: <span class="selected-county-detail">${currenciesName}</span></div>
							<div class="selected-country-detail-title">Region: <span class="selected-county-detail">${selectedCountry.region}</span></div>
						</div>
						<div class="details-area2">
							<div class="selected-country-detail-title">Sub Region: <span class="selected-county-detail">${selectedCountry.subregion}</span></div>
							<div class="selected-country-detail-title">Languages: <span class="selected-county-detail">${countryLanguages}</span></div>
							<div class="selected-country-detail-title">Capital: <span class="selected-county-detail">${selectedCountry.capital}</span></div>
						</div>
					</div>	
					<div class="border-countries-detail-title">Border Countries: ${bordersNames} </div>
			</div>
		</div>
	
	`

}

function hideCardDetails() {
	document.querySelector("main").style.display = "block";
	document.querySelector(".country-details-area").style.display = "none";

}

function search() {
	var input = document.querySelector("input");
	var loweredSearchTxt = input.value.toLowerCase();
	var countries = data.filter((country) => country.name.toLowerCase().indexOf(loweredSearchTxt) > -1);
	drawCountryCards(countries);
}



function selectContinent(continentName) {
	if (continentName == "All") {
		drawCountryCards(data);
	} else {
		var selectedContinent = data.filter((continent) => continentName == continent.region);
		drawCountryCards(selectedContinent);

	}

}