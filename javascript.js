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
	var body = document.querySelector("body");
	var header = document.querySelector("header");
	var input = document.querySelector("input");
	var detailsArea = document.querySelectorAll(".card-details-area");
	body.style.animation = "background";
	body.style.animationDuration = "2s"
	detailsArea.style.backgroundColor = "grey";
}

function showCardDetails(countryCode) {
	var mainArea = document.querySelector("main");
	var countryArea = document.querySelector(".country-details-area");
	mainArea.style.display = "none";
	countryArea.style.display = "block";
	var country = data.find((country) => country.alpha3Code == countryCode);
	countryArea.innerHTML = `
	<button onclick="hideCardDetails()" class="back"><img class="arrow"
				src="images/4829870_arrow_back_left_icon.png">Back</button>
	<div class="content-area">
			<img class="selected-country-flag" src="${country.flags.svg}">
			<div class="details-area-container">
				<div class="details-area">
					<div class="selected-county-name">${country.name}</div>
					<div class="selected-county-detail-title">Native Name: <span class="selected-county-detail">${country.nativeName}</span>
					</div>
					<div class="selected-county-detail-title">Top Level Domain: <span class="selected-county-detail">${country.topLevelDomain}</span>
					</div>
					<div class="selected-county-detail-title">Population: <span class="selected-county-detail">${country.population}</span></div>
					<div class="selected-county-detail-title">Currencies: <span class="selected-county-detail">${country.currencies.name}</span></div>
					<div class="selected-county-detail-title">Region: <span class="selected-county-detail">${country.region}</span></div>
					<div class="selected-county-detail-title">Sub Region: <span class="selected-county-detail">${country.languages}</span></div>
					<div class="selected-county-detail-title">Languages: <span class="selected-county-detail">${country.subregion}</span></div>
					<div class="selected-county-detail-title">Capital: <span class="selected-county-detail">${country.capital}</span></div>
					<div class="border-countries-detail-title">Border Countries: <span
						class="border-countries-detail"></span> </div>
				</div>
			</div>
		</div>
	
	`

}

function hideCardDetails() {
	document.querySelector("main").style.display = "block";
	document.querySelector(".country-details-area").style.display = "none";

}

function selectContinent(continentName) {
	if (continentName == "All") {
		drawCountryCards(data);
	} else {
		var selectedContinent = data.filter((continent) => continentName == continent.region);
		drawCountryCards(selectedContinent);

	}

}







/////////////////////////////////////////////////////////////

// onclick="showCardDetails(${`country-name${[i]}`})"
// country-name${[i]}

// function showCardDetails(country_name) {
// 	var countryName = document.querySelector("." + country_name)
// 	var main_area = document.querySelector("main");
// 	var country = document.querySelector(".country-details-area");
// 	main_area.style.display = "none";
// 	country.style.display = "block";
// 	console.log(countryName)

// }

////////////////////////////////////////////////////////////

// function isThisCountryWhatIwant(country) {
// 	var countryCode = 'AFG';
// 	return (country.alpha3Code == countryCode);
// }
