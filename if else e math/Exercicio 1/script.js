// Considere o seguinte código:

/* Esse código dá um erro na última linha. Qual erro ? Por quê ele acontece ? Como podemos consertar o código, mantendo a intenção original dele 
Faça o conserto de duas maneiras alternativas:

Usando if/else
Usando operador ternário */


//  IF ELSE

let serviceFee;

const age = Number(prompt("idade: "));
if (age < 5) {
  serviceFee = 20;
} else {
  serviceFee = 30;
}
alert(`Taxa de serviço calculada: R$${serviceFee}`);


TERNARIO

// const age = Number(prompt("idade:"));
// const serviceFee = age < 5 ? 20 : 30
// alert(`Taxa de serviço calculada: R$${serviceFee}`);











