$("#formulaire").submit(function (e) { // On sélectionne le formulaire par son identifiant
	e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire

	var donnees = $(this).serialize(); // On créé une variable content le formulaire sérialisé

	if ($erreur == 1) {
		e.preventDefault();
		$erreur = 0;
		alert("Merci de remplir tous les champs");
	}


	$.ajax({
		url: 'http://91.134.222.29/inscriptionSupervise.php',
		type: 'POST',
		data: donnees,
	});
});