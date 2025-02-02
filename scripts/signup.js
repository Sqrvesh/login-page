import { database } from "../data/database.js";

function checkAvailability(newRecord) {
	let status = true;
	database.forEach(record => {
		if (record.username == newRecord.username) status = false;
	});

	return status;
}

console.log(database);

document.querySelector(".js-signup-page-signup-button").addEventListener("click", () => {

	const name = document.querySelector(".js-signup-name-box").value;
	const age = document.querySelector(".js-signup-age-box").value;
	const email = document.querySelector(".js-signup-email-box").value;
	const username = document.querySelector(".js-signup-username-box").value;
	const password = document.querySelector(".js-signup-password-box").value;

	const record = {
		name,
		age,
		email,
		username,
		password
	};

	if (!(name && age && email && username && password)) //check if all fields are filled
	{
		alert("Please ensure to enter all details.");
		return;
	}

	if (!checkAvailability(record))
	{
		alert("Username is already taken. Try again.");
		return;
	}

	document.querySelector(".js-signup-name-box").value= "";
	document.querySelector(".js-signup-age-box").value = "";
	document.querySelector(".js-signup-email-box").value = "";
	document.querySelector(".js-signup-username-box").value = "";
	document.querySelector(".js-signup-password-box").value ="";

	alert("Account Created. Proceed towards login.");

	database.push(record);
	localStorage.setItem("database", JSON.stringify(database));
});

document.querySelector(".js-signup-page-login-button").addEventListener("click", () => {
	open("login.html", "_self");
});
