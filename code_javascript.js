var intToString = [ '', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf','vingt','vingt-et-un'];


var donneeSaisie = parseInt(prompt('Veuillez saisir un nombre en chiffre compris entre 0 et 999'), 10);
var estCeUnNombre = isNaN(donneeSaisie);

while (estCeUnNombre) {
	alert("Ceci n'est pas un nombre");
	donneeSaisie = parseInt(prompt('Veuillez saisir un nombre en chiffre compris entre 0 et 999'), 10);
	estCeUnNombre = isNaN(donneeSaisie);
};

if ((0<= donneeSaisie) && (donneeSaisie <= 999)) {
	alert("le nombre que vous avez saisie s'écrit en toutes lettres comme ceci ... " + intToString[donneeSaisie]);
} else {
	alert("Le nombre saisie n'est pas compris entre 0 et 999... ");

}
