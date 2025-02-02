import { database } from "../data/database.js";

function authenticate(user, pass) {
	let access = false;
	database.forEach((record) => {
		if (record.username === user && record.password === pass)
		{
			access = true;
			localStorage.setItem("currentUser", JSON.stringify(record));
		}
	});

    return access;
}  

console.log(database);

document.querySelector(".js-signup-button").addEventListener("click", () => {
	open("signup.html", "_self");
});

document.querySelector(".js-login-button").addEventListener("click", () => {
	const username = document.querySelector(".js-username-box").value;
	const password = document.querySelector(".js-password-box").value;
	document.querySelector(".js-username-box").value = "";
	document.querySelector(".js-password-box").value = "";

	if (authenticate(username, password))
	{
		open("main.html", "_self");
		const name = document.querySelector(".js-main-page-name").innerHTML;
		if (name) name = username;
	}

	else alert("ACCESS DENIED LMAO");

});