/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple :

[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

// ❌ INTERDIT
// const sieges = [];

function theaterSieges() {
	// Your code here !
	// ✅ On déclare nos variable à l'interieur de notre fonction
	const sieges = [];
	// Je boucle une 1ere fois pour créer le nombre de rangee
	for (let i = 1; i <= 26; i++) {
		const rangee = [];
		// Je boucle une 2eme fois pour ajouter les sièges dans ma rangée
		for (let j = 1; j <= 100; j++) {
			rangee.push(i + "-" + j);
		}
		// Je push ma rangée dans le tableau final qui se nomme sieges.
		sieges.push(rangee);
	}
	// je return mon tableau remplit
	return sieges;
}

module.exports = theaterSieges;
