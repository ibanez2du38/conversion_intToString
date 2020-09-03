var intToString = [ '', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf','vingt','vingt-et-un'];


var donneeSaisie = parseInt(prompt('Veuillez saisir un nombre en chiffre compris entre 0 et 999'), 10);
var estCeUnNombre = isNaN(donneeSaisie);

while (estCeUnNombre) {
	alert("Ceci n'est pas un nombre");
	donneeSaisie;
	estCeUnNombre;
}

