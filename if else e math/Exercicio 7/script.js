
const prompt = require("prompt-sync")({ sigint: true });


/* 

Imagine que temos uma situação em que queremos aplicar um desconto especial ao pedido de um cliente com base em vários critérios: o tipo de cliente, o valor total do pedido atual, se ele possui cartão fidelidade e a quantidade de itens no carrinho.

O código é o seguinte (não importa de onde as variáveis vieram, elas são parte do sistema e só estamos olhando para um trecho do sistema):

Explique o que significa essa condição do comando if, ou seja, qual é a “regra de negócio” (quais clientes recebem desconto, qual é o critério no mundo real).

Em seguida modifique o código com o seguinte propósito: defina constantes adicionais antes do comando if, as quais podem vir a ser usadas na condição do if (substituindo a condição original) para simplificá-la.

==========================================================================================================================================

/* 

 Regra de negocio para ganhar desconto na primeira parte é : 

   Se o cliente for premium
   Se o o total de pedidos for maior que 100 reais
   Se ele tiver cartao fidelidade

   OU

   Se o cliente for regular 
   Se o total de pedidos for > 200
   Se a a cquantidade de itens > 5
   Nao pode ser cliente novo.

*/


let = customerType = "premium";
let = orderTotal = 101;
let = hasLoyaltyCard = true;
let = itemCount = 200;
let = isFirstTimeCustomer = false;


const ClientePremium = customerType === "premium" && orderTotal >= 100 && hasLoyaltyCard;
const ClienteRegular = customerType === "regular" && orderTotal >= 200 && itemCount > 5 && !isFirstTimeCustomer


if (ClientePremium || ClienteRegular) {
  alert("Você tem desconto especial =)");
} else {
  alert("Você não tem desconto =(");
}