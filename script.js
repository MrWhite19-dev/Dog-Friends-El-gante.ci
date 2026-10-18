
function selectDog(name){
document.getElementById("dog").value = name;
window.location="#commande";
}

function sendOrder(e){

e.preventDefault();

let phone = "2250173319832";

let msg = "Bonjour, je veux commander un chien";

window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
}



let numero = "2250173319832";

/* FORM 1 */
function sendForm1(){

let nom = document.getElementById("nom1").value;
let tel = document.getElementById("tel1").value;
let service = document.getElementById("service1").value;

let msg =
"💼 SERVICE PREMIUM\n" +
"Nom: " + nom + "\n" +
"Tel: " + tel + "\n" +
"Demande: " + service;

window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(msg));
}

/* FORM 2 */
function sendForm2(){

let nom = document.getElementById("nom2").value;
let tel = document.getElementById("tel2").value;
let service = document.getElementById("service2").value;

let msg =
"🌙 RESERVATION VIP\n" +
"Nom: " + nom + "\n" +
"Tel: " + tel + "\n" +
"Demande: " + service;

window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(msg));
}