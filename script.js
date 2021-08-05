
let chilometri = parseInt(prompt("Quanti chilometri intende percorrere?"));
let eta = parseInt(prompt("Quanti hanni ha?"));

let prezzoBiglietto = chilometri * 0.21;

if(eta<18){
    prezzoBiglietto -= (prezzoBiglietto * 20) / 100;
}
else if(eta>65){
    prezzoBiglietto -= (prezzoBiglietto * 40) / 100;
}

document.getElementById("prezzo_biglietto").innerHTML = prezzoBiglietto.toFixed(2);
console.log("il prezzo del biglietto è di: " + prezzoBiglietto);