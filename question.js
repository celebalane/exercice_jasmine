var convertToCelsius = function(temperature) {
/*/////////////////   CONSIGNE  //////////////////////////////////
Concevoir un algorithme capable de convertir une température de degrés Farenheit en degrés Celsius. 
Pour passer d'une valeur Farenheit à une valeur Celsius, il faut appliquer la règle suivante :
§         Celsius = (Farenheit - 32) * 5/9
L'algorithme doit lire la température en degrés Farenheit, et l'afficher en Farenheit et en Celsius.
*/////////////////////////////////////////////////////////////
	var temperature;
    var celsius;

    celsius = Math.round((temperature - 32) * 5/9);
    reponse = celsius;
    	
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

    	if (age >= 18){
        	reponse = 'majeur';
    	}
    	else {
        	reponse = 'mineur';
    	}  

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
    var vente;
    var ventesRabais;
    var ventesRegulier;
    var payeHebdo;

    ventesRegulier = (ventesRegulier * 6) / 100;
    ventesRabais = (ventesRabais * 6) / 100;
    vente = ventesRegulier + ventesRabais;
    payeHebdo = 200 + ventesRegulier + ventesRabais;
    reponse = payeHebdo;

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

    return reponse;
}