// if (customerAge >= 18) {
//   if (customerMembership === "premium" || frequentBuyer) {
//     if (!unpaidBalance) {
//       console.log("Elegível para desconto");
//     }
//   }
// }


const prompt = require("prompt-sync")({ sigint: true });

let customerAge = Number(prompt("Qual é a idade do cliente ? "));
let customerMembership = prompt("Qual é o customer Membership?(premium ou comum? ")
let unpaidBalance = Number(prompt("Qual o saldo do cliente? "));
let frequentBuyer = prompt("O cliente é comprador frequente?(true ou false ");



if (customerAge >= 18 && frequentBuyer === "true" && customerMembership === "premium" && unpaidBalance != 0) {
  console.log("Elegível para desconto");
} else {
  console.log("Não elegivel para desconto");
}
