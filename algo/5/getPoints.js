/* Notre équipe de football participe à un championnat
dans laquelle elle a joué 10 matchs.

// ⚠️ Attention l'enoncer est différent dans le tableau score
Le résultat d'un match est comme suit : "3-0"

Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 13
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat
*/
/*
les scores = [
	"1-0", => 3
	"2-0", => 3
	"3-0", => 3
	"4-4", => 1
	"2-2", => 1
	"3-3", => 1
	"1-4", => 0
	"2-3", => 0
	"2-4", => 0
	"3-3", => 1
];

Sommes = 13

*/

const scores = [
	"1-0",
	"2-0",
	"3-0",
	"4-4",
	"2-2",
	"3-3",
	"1-4",
	"2-3",
	"2-4",
	"3-3",
];

function getPoints(array) {
	let points = 0;
	// Ici, je boucle sur chaque item de mon tableau des scores
	for (let i = 0; i < array.length; i++) {
		let score = array[i].split("-");
		console.log(score);
		if (score[0] > score[1]) {
			// points = points + 3
			points += 3;
		} else if (score[0] === score[1]) {
			points += 1;
		}
	}
	return points;
}

//getPoints(scores);

module.exports = getPoints;
