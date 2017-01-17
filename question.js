var convertToCelsius = function(temperature) {
/*/////////////////   CONSIGNE  //////////////////////////////////
Concevoir un algorithme capable de convertir une température de degrés Farenheit en degrés Celsius. 
Pour passer d'une valeur Farenheit à une valeur Celsius, il faut appliquer la règle suivante :
§         Celsius = (Farenheit - 32) * 5/9
L'algorithme doit lire la température en degrés Farenheit, et l'afficher en Farenheit et en Celsius.
*/////////////////////////////////////////////////////////////
	var temperature;
    var celsius;

    celsius = Math.round((temperature - 32) * 5/9); /*Arrondi le calcul selon le chiffre derrière la virgule*/
    reponse = celsius;
    //ou reponse = 	Math.round((temperature - 32) * 5/9);
	return reponse;

}
var majeur = function(age) {
/*//////////////////   CONSIGNE  /////////////////////////////////
§	Concevoir un algorithme capable retourner la valeur majeur ou mineur selon l'âge.
§	18 ou plus majeur sinon mineur
§   var age = integer;
*/////////////////////////////////////////////////////////////
    //ici je met mon code ;)
		var age;

    	if (age >= 18){    /*Si l'age est supérieur ou égal à 18*/
        	reponse = 'majeur';
    	}
    	else {
        	reponse = 'mineur';
    	}  
//Autre solution age >= 18 ? reponse = "majeur" : reponse = "mineur"; oui/majeur non/mineur
    return reponse;
}
var paye = function(vente) {
/*///////////////////   CONSIGNE  //////////////////////////////// 
§         L'employé reçoit 200$ par semaine comme salaire de base.
§         L'employé reçoit 6% du total des ventes hebdomadaires à prix régulier.
§         L'employé reçoit 3% du total des ventes hebdomadaires à prix rabais.
          var vente = {ventesRegulier : 0, ventesRabais : 0};				
*//////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)
    var payeHebdo;

    payeHebdo = 200 + ((vente['ventesRegulier']*6)/100) + ((vente['ventesRabais']*3)/100); /*calcul de la paye*/
    reponse = Math.round(payeHebdo*100)/100; /*Arrondi à deux chiffres après la virgule*/
//Autre réponse reponse = vente.ventesRegulier*6/100 + vente.ventesRabais*3/100+200;	
	return reponse;
}
var cesar = function(crypto, chaine) {
/*/////////////////////   CONSIGNE  ////////////////////////////////    
§           On code avec César ;)
§           le mot a codé est dans str 
§           la clée de chiffrage est cle
§			la chaine de caractères utilisé pour codé est dans chaine	
			var crypto = {str : '', cle : 0};	
*////////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)
//var motACoder = crypto.str;
//var cle = crypto.cle;
//var alphabet = chaine;
//var lettreCoder = [''];
//var i=0;

//Ce que j'avais commencé : for(nbLettre = 0; nbLettre < motACoder.length-1; nbLettre ++) { /*Boucle pour coder chaque lettre*/
	//lettreCoder.push = motACoder[i]) + alphabet + crypto.cle;
	//reponse = lettreCoder;
	//i++;
//}
reponse= '';

for ( i=0; i <= crypto.str.length-1; i++) {  //Boucle pour la longueur du mot
	caractere = crypto.str[i];               //Prend le caractère
	index = chaine.indexOf(caractere);       //Recherche  de l'index du caractère dans chaine
	indexcrypte = index + crypto.cle;         //calcul du nouvel index avec la clé
	while (indexcrypte > chaine.length-1) {     //Tant que l'index du mot a coder est supérieur à la longueur de la chaine contenant l'alphabet de codage
		indexcrypte = indexcrypte - chaine.length; //Soustrait la taille de chaine
	}
	reponse += chaine[indexcrypte];
}
     return reponse;
}