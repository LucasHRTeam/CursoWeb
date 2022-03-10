// As estruturas denominadas arrays são usadas para
// atribuir mais de um elemento em uma mesma variável 
// seu type === 'object'. Sua estrutura é organizada 
// por índices, onde cada um representa um elemento


const listCodeCountry = ["BRL", "USD", "EUR"];

// console.log(listCodeCountry[0]) ~> BRL

// funções importantes:

Array.sort();
// reorganiza os elementos do array em ordem crescente 
// caso os elementos sejam strings ele organiza em
// ordem alfabética 


Array.push(value);
// este adiciona um novo elemento na última posição.
// usado para inserir novas informações


Array.unshift(value);
// este faz a mesma tarefa do .push(), mas a diferença
// é que este adiciona o novo elemento no início do
// array, já o outro adiciona no final.


Array.splice(um, dois, três);
// esta apaga algum elemento do array, especificado
// pelo "um", que é o índice dele e tem o
// type === "number". O "dois" é a quantidade de índices
// que serão apagados a partir do "um".

