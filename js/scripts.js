
alert ("Ciao!")

const chilometri = prompt("Quanti chilomentri hai percorso?")
document.getElementById("km").innerHTML =  chilometri;

const età = prompt("Quanti anni hai?");
document.getElementById("età").innerHTML = età;

const prezzoAlChilomentro = 0.21;

const prezzoFinale = chilometri * prezzoAlChilomentro;
document.getElementById("result").innerHTML = prezzoFinale + "€"; 

const prezzoUnder_18 = prezzoFinale / 100 * 20 ;

const prezzoOver_65 = prezzoFinale / 100 * 40 ;


if (età < 18) {
    document.getElementById("sconto").innerHTML = "20%";
    document.getElementById("result").innerHTML = prezzoUnder_18 + "€"; 
    
} else if (età >= 65) {
   document.getElementById("sconto").innerHTML = "40%";
   document.getElementById("result").innerHTML = prezzoOver_65 + "€";

}  else {
    document.getElementById("sconto").innerHTML = "No";
}