function ChaineAleatoire(nbcar)
{
    var ListeCar = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9");
    var Chaine ='';
    for(i = 0; i < nbcar; i++)
    {
        Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
    }
    return Chaine;
}

function addSupervise() {

        var nom = $('#nom').val(),
        prenom = $('#prenom').val();
	    var cle = ChaineAleatoire(6);
   		alert("La clé de la personne supervisée est : " + cle + "\nElle doit saisir cette clé pour se connecter.");

        $.ajax({
            url: 'http://91.134.222.29/addSupervise.php',
            type: 'POST',
			data: {nom: nom, prenom: prenom, cle: cle}       
		});
    }

