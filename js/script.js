const ageUtente = prompt("Quanti anni hai?");

const kmUtente = prompt("Quanti km vuoi percorrere?");

console.log (ageUtente,kmUtente);

/*€ al km*/
const prezzoBiglietto = "0.21";

let costoBiglietto = (kmUtente * prezzoBiglietto);


if (ageUtente <18){
  costoBiglietto = (costoBiglietto - (costoBiglietto * 20 / 100));
} else if (ageUtente >= 65){
  costoBiglietto = (costoBiglietto - (costoBiglietto * 40 / 100));
}

const message = `
Il costo del tuo biglietto è di € ${costoBiglietto.toFixed(2)}
`

document.getElementById("output").innerHTML = message;