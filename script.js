
let chilometri = parseInt(prompt("Quanti chilometri intende percorrere?"));
let eta = parseInt(prompt("Quanti hanni ha?"));

document.getElementById("chilometri").innerHTML = chilometri;
document.getElementById("eta").innerHTML = eta;


let prezzoBiglietto = chilometri * 0.21;

if(eta<18){
    prezzoBiglietto -= (prezzoBiglietto * 20) / 100;
}
else if(eta>=65){
    prezzoBiglietto -= (prezzoBiglietto * 40) / 100;
}
else if(Number.isNaN(eta)){
    alert("Inserisci un numero!!");
}

document.getElementById("prezzo_biglietto").innerHTML = prezzoBiglietto.toFixed(2);
