// 1
// Je dois recuperer l'image
const avatar = document.querySelector(".avatar_banner");
avatar.addEventListener("click", (e) => {
	e.target.src = "./image/avatar.svg";
});

//2 -> 3 -> 4
// Je récupère ma span name
const modifyButton = document.querySelector(".modify_button");

modifyButton.addEventListener("click", newBannerName);

function newBannerName() {
	// Je récupère les élements de mon front
	const name = document.querySelector("#name");
	const newColorBg = document.querySelectorAll(".pink-bg");
	const newColorText = document.querySelectorAll(".pink-text");
	const links = document.querySelectorAll(".menu > a");

	// interaction with user
	const color = prompt("Enter new color");
	name.textContent = prompt("New name");

	// add style
	name.style.color = "white";

	/** Je met à jour toutes mes couleurs pink -> purple */
	newColorBg.forEach((bg) => {
		bg.style.backgroundColor = color;
	});

	newColorText.forEach((title) => {
		title.style.color = color;
	});

	//5
	// changement de la couleurs des liens
	links.forEach((link) => {
		link.style.color = color;
	});
}

//6
// Je dois modifier l'HTML avec les dev tools
const button = document.querySelector(".modifyText");

button.addEventListener("click", () => {
	const lists = document.querySelectorAll("#front-dev-tools > li");
	const tools = ["VSCode", "Github", "Terminal", "Express"];
	lists.forEach((list, index) => {
		list.textContent = tools[index];
	});
});

//7
// Ajout d'une compétence
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	// Previent le rechargement de la page
	e.preventDefault();
	// je recupère depuis mon front
	const textInput = document.querySelector("#addBackTools");
	const ul = document.querySelector(".back-dev-tools");
	// je créer mon élément li
	const li = document.createElement("li");
	// j'ajoute la valeur de mon imput
	const data = document.createTextNode(textInput.value);
	// ensuite je met cette valeur à l'interieur de mon li
	li.appendChild(data);
	// et mon li à l'interieur de mon ul
	ul.appendChild(li);

	// une fois soumis, je vide l'input
	textInput.value = "";
});
