

/*O objetivo aqui é que quando o usuario clicar no botao, seja calculada a taxa de 
servico e implantada no paragrafo vazio com o id service-fee

Entao primeiro vamos criar uma funcao que pede o peso do animal de inicio 

As regras da loja são: uma taxa fixa de 10 reais + 2x para cada quilo do animal.


*/
function calculateFee() {
  const animalWeight = Number(prompt("Digite o peso do animal (kg)"));
  const serviceFee = 10 + animalWeight * 2;
  const paragraph = document.getElementById("service-fee"); //selecionamos o paragrafo vazio pelo seu id
  paragraph.innerText = `Taxa de serviço calculada: R$${serviceFee}`; // injetamos resultado nele
}
const button = document.getElementById("calculate-service-fee"); // selecionamos o botao pelo seu id
button.addEventListener("click", calculateFee); // colocamos o evento para que quando clique, rode a funcao.
