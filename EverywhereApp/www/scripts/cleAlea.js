var ChaineAleatoire = function ChaineAleatoire(nbcar)
{
    var ListeCar = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9");
    var Chaine ='';
    for(i = 0; i < nbcar; i++)
    {
        Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
    }
    alert("votre clé est : " + Chaine);
    return Chaine;
}