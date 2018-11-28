$(document).ready(function () {
    var $nom = $('#nom'),
        $prenom = $('#prenom'),
        $mail = $('#mail'),
        $mdp = $('#mdp'),
        $confmdp = $('#confmdp'),
        $numTel = $("#numTel"),
        $erreur = 0,
        $envoi = $('#envoi');

    $mail.focusout(function () {
        if (!Test_adresse_email(mail)) {
            $(this).css({//On rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
        else {
            $(this).css({//Si tout est bon on le rend vert
                borderColor: 'green',
                color: 'green'
            });
        }
    });
    function Test_adresse_email(mail) {
        var emil = $('#mail').val();
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emil);
    };
 $("#formulaire").submit(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire

    var donnees = $(this).serialize(); // On créer une variable content le formulaire sérialisé
   
    if ($erreur == 1) {
        e.preventDefault();
        $erreur = 0;
        alert("Merci de remplir tous les champs");
    }
    else {

        verifier($nom);
        verifier($prenom);
        verifier($mail);
        verifier($mdp);
        verifier($confmdp);
        verifier($numTel);
        $.ajax({
            url: 'http://91.134.222.29/inscription.php',
            type: 'POST',
            data: donnees,
        });
    }
});

    function verifier(champ) {
        if (champ.val() == "") {//Si le champ est vide
            $erreur = 1;
        }
    }
});