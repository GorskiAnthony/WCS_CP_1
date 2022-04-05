/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11",  "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
	// Your code here !
	let maxLength = 0;
	let newArray = [];

	arrayA.length > arrayB.length
		? (maxLength = arrayA.length)
		: (maxLength = arrayB.length);

	for (let i = 0; i < maxLength; i++) {
		arrayA[i] ? (numA = +arrayA[i]) : (numA = 0);
		arrayB[i] ? (numB = +arrayB[i]) : (numB = 0);
		newArray.push((numA + numB).toString());
	}

	return newArray;
}

module.exports = sumArr;
