
alert ("Ciao!")

const chilometri = prompt("Quanti chilomentri hai percorso?")
document.getElementById("km").innerHTML =  chilometri;

const età = prompt("Quanti anni hai?");
document.getElementById("età").innerHTML = età;

const prezzoAlChilomentro = 0.21;

const prezzoFinale = parseInt(chilometri) * prezzoAlChilomentro;
document.getElementById("result").innerHTML = prezzoFinale + "€"; 

const scontoUnder_18 = prezzoFinale  / 100 * 20 ;

const scontoOver_65 = prezzoFinale / 100 * 40 ;

const prezzoUnder_18 = prezzoFinale - scontoUnder_18 ;

const prezzoOver_65 = prezzoFinale - scontoOver_65 ;




if (età < 18) {
    document.getElementById("sconto").innerHTML = "20%";
    document.getElementById("result").innerHTML = prezzoUnder_18.toFixed(2) + "€"; 
    
} else if (età >= 65) {
   document.getElementById("sconto").innerHTML = "40%";
   document.getElementById("result").innerHTML = prezzoOver_65.toFixed(2) + "€";

}  else {
    document.getElementById("sconto").innerHTML = "No";
}