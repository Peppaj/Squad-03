/*

1- Entrou uma nova aluna chamada Bianca na Campinho e precisamos dar boas vindas à ela.
Crie um programa que fale para ela:
Olá Bianca, seja bem vinda!

Dica: deixe o nome de Bianca guardada em uma variável.

Aqui veremos concatenação. O que é isso?
Simplesmente juntar dois valores com sinal de +.
Exemplo: 

const cachorro = “Bob”
const idade = 5
const resultado = cachorro + “ tem ” + idade + “ anos.”
RESULTADO FINAL: Bob tem 5 anos.

atenção: atente aos espaços na frase.

Entrada de Dados:
valor da variável com nome da aluna

Processamento:
valor de uma variável com o resultado final concatenando o nome mais a frase.

Saída:
valor da variável com resultado final no console

====================================================
*/

let aluno = "Bianca";
console.log("Olá " + aluno + ", seja bem vinda! ");
/*
2 - João comecou a trabalhar como desenvolvedor mas precisa de comprar um
computador melhor. Achou um no preço de R$4.500,00 que é o valor que pode gastar
no momento. Se ele comprar online vai ter um desconto de 20%.
Calcule o preço final que João pagará com o desconto.

Entrada:
valor inicial do computador

Processamento:
Calcular o desconto no valor inicial

Saída:
Resultado do preço final no console.

====================================================
*/

let valor = 4.500
let taxa = 0.20
let resultado = valor - (valor * taxa)
console.log(resultado)

/*
3- Ada Lovelace criou um novo programa muito importante e tem que compartilhar o 
usuário e a senha para que seu colega de profissão consiga executar em seu computador.
Usando a criptografia de Júlio César, onde ele criptografou para cada letra do alfabeto,
a senha seria a terceira a partir dela.Exemplo: A seria D (A, B, C,D)
B seria E (B, C,D,E) , C seria F e assim sucessivamente.

obs: a imagem da criptografia está na pasta imagens.

Primeiro passo:
Cifre o usuário e coloque o resultado em uma variável usuarioCifrado. 
“ada@gmail.com”
obs: @ e . não precisam ser codificados. 

Segundo passo:
Decifre a senha abaixo e declare em uma variável senhaDecifrada
“D VHQKA GR EDQFR H MDYDVFULSW”

Terceiro passo:
Declare em uma variável a concatenação da frase e faça aparecer no console o resultado das variáveis:
“O usuáriol é ???? e a senha é ??? “

====================================================
*/

/*
4 - Elabore um programa que ajude um restaurante a calcular o valor final
 de um pedido para os seus clientes. A conta é calculada junto com o valor 
 da refeição e a taxa de entrega. 

Entrada de dado: 
O valor da conta de 150 R$

Processamento :
Calcular a conta junto com o valor da entrega entrega para o endereço do cliente: 18 R$

Saída: 
Exibir para o cliente o custo total da conta juntamente com a entrega. 

====================================================
*/

/*
5 - "Em qualquer triângulo, a soma das medidas de dois lados é sempre maior que a medida do terceiro."
  
Levando em consideraçao essa regra elabore um programa que valide se  Um engenheiro precisa construir uma piscina triangular e quer que suas dimensões sejam:  5m, 10m e 9m. Será possível construir essa piscina?


Entrada de dado:  Os tamanhos dos segmentos, 5cm, 10cm e 9cm.

Processamento :
Calcular para cada seguimento a regra para a existencia de um trinagulo. 

Saída: Exibir o se pode ou nao ser um triangulo.

====================================================
*/

/*
6 - Levando em consideração que existem dois tipos de juros aplicados no mercado 
fincanceiro e que o mais utilizado é o composto. Elabore um programa que ajude uma
pessoa a saber quanto irá gastar em caso de empréstimo bancário no valor de 
R$ 15.000,00 que será  pago em 24 parcelas mensais com juros compostos 
de 1,5% ao mês. Você deve exibir o valor de cada parcela, 
além do valor total do emprestimo.

Entrada de dado: 
Valor inicial do emprestimo: 15.000 R$

Processamento :
Calcular o juros usando a formula para juros compostos  V = P (1 + r/n)^(nt), 
onde V é o valor final, P é o principal (ou valor inicial), r é a taxa de juros
 mensal, n é o número de vezes que os juros são compostos por mês e t é o 
 tempo em meses. 

Saída:
Exibir para o cliente o valor final do emprestimo e o de cada parcela

*/