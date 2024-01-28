async function get() {
	const response = await fetch("data.json");
	const data = await response.json();
}
