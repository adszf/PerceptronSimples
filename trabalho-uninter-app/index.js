//INSTRUÇÕES
/*
O PROJETO FOI FEITO NO AMBIENTE NODE COM AS INSTALAÇÕES DOS PACOTES FEITAS PELO NPM QUE SÃO: UNDERSCORE E SYNAPTIC.
UNDERSCORE É UMA BIBLIOTECA DE MANIPULAÇÃO DE ARRAYS E  A SYNAPTIC É  A BIBLIOTECA QUE FOI UTILIZADA PARA CRIAR A REDE NEURAL.
PARA EXECUTAR O PROJETO PODE SER FEITO ATRAVES DO VSCODE COM O DEBUG NATIVO DO NODE OU AINDA NO TERMINAL DE QUALQUER PREFERENCIA, EXECUTAR O COMANDO "node index.js".
o PROJETO FOI ESCRITO EM JAVASCRIPT E  A PRINCÍPIO ELE SEGUE MODELO ESTRUTURADO.
*/

//Bibliotecas importadas em variáveis:
//
var lodash = require('underscore')   // <-- BIBLIOTECA PARA MANIPULAÇÃO DE ARRAYS ETC..
var synaptic = require('synaptic');  // <-- BILIOTECA EM JAVASCRIPT UTILIZADA PARA REDE NEURAIS
//

//Variáveis:
//
const { Layer} = synaptic; //--> Importando da biblioteca as camadas para criação da rede neural.
var inputLayer = new Layer(8); //--> Nova camada com numero de neuronios
var outputLayer = new Layer(1);//--> Nova camada com numero de neuronios
inputLayer.project(outputLayer)//--> Conexão entre as camadas da RNA

var trainingData = [ //INPUT para treinamento com RU'S variadas
  //{input: [0,2,0,7,2,9,8,5], output: [1]}, --> RU
  { input: [0, 2, 0, 7, 2, 9, 8, 2], output: [1] },
  { input: [0, 2, 5, 2, 0, 8, 7, 9], output: [0] },
  { input: [2, 2, 0, 8, 5, 9, 7, 0], output: [0] },
  { input: [0, 5, 8, 0, 9, 2, 7, 2], output: [0] },
  { input: [2, 5, 0, 0, 8, 7, 9, 2], output: [0] },
  { input: [0, 2, 8, 5, 0, 7, 2, 9], output: [0] },
  { input: [2, 8, 0, 2, 7, 5, 9, 0], output: [0] },
  { input: [8, 2, 0, 5, 9, 2, 0, 7], output: [0] },
  { input: [9, 2, 0, 7, 5, 0, 2, 8], output: [0] },
  { input: [0, 9, 8, 2, 7, 0, 2, 5], output: [0] },
  { input: [0, 7, 8, 0, 5, 2, 9, 2], output: [0] },
  { input: [7, 8, 0, 0, 9, 5, 2, 2], output: [0] },
  { input: [5, 0, 7, 2, 2, 9, 0, 8], output: [0] },
  { input: [0, 2, 7, 2, 8, 5, 0, 9], output: [0] },
  { input: [0, 2, 0, 7, 5, 9, 2, 8], output: [0] },
  { input: [2, 8, 7, 9, 0, 0, 5, 2], output: [0] },
  { input: [7, 2, 0, 5, 8, 2, 0, 9], output: [0] },
  { input: [2, 8, 0, 9, 7, 5, 2, 0], output: [0] },
  { input: [5, 0, 8, 2, 0, 7, 9, 2], output: [0] },
  { input: [2, 0, 0, 5, 8, 9, 7, 2], output: [0] },
  { input: [8, 9, 0, 5, 7, 0, 2, 2], output: [0] },
  { input: [0, 2, 2, 0, 8, 5, 9, 7], output: [0] },
  { input: [5, 0, 2, 0, 8, 2, 9, 7], output: [0] },
  { input: [0, 9, 8, 2, 7, 2, 5, 0], output: [0] },
  { input: [9, 2, 0, 8, 2, 5, 0, 7], output: [0] },
  { input: [8, 5, 7, 2, 9, 2, 0, 0], output: [0] },
  { input: [8, 0, 9, 0, 2, 7, 5, 2], output: [0] },
  { input: [5, 7, 0, 2, 2, 0, 8, 9], output: [0] },
  { input: [9, 5, 0, 8, 2, 2, 0, 7], output: [0] },
  { input: [8, 9, 5, 7, 0, 2, 2, 0], output: [0] },
  { input: [0, 7, 8, 0, 5, 9, 2, 2], output: [0] },
  { input: [5, 0, 9, 7, 2, 2, 8, 0], output: [0] },
  { input: [0, 2, 5, 2, 7, 9, 0, 8], output: [0] },
  { input: [8, 0, 5, 9, 2, 2, 7, 0], output: [0] },
  { input: [0, 9, 5, 0, 7, 2, 2, 8], output: [0] },
  { input: [0, 8, 0, 2, 9, 2, 5, 7], output: [0] },
  { input: [0, 5, 2, 8, 7, 9, 2, 0], output: [0] },
  { input: [0, 2, 8, 7, 0, 9, 2, 5], output: [0] },
  { input: [9, 5, 2, 2, 7, 8, 0, 0], output: [0] },
  { input: [0, 2, 5, 8, 7, 0, 2, 9], output: [0] },
  { input: [9, 2, 5, 0, 8, 0, 7, 2], output: [0] },
  { input: [5, 9, 0, 7, 2, 2, 8, 0], output: [0] },
  { input: [9, 5, 2, 8, 0, 7, 0, 2], output: [0] },
  { input: [0, 5, 2, 2, 7, 8, 0, 9], output: [0] },
  { input: [8, 0, 5, 0, 2, 7, 2, 9], output: [0] },
  { input: [5, 9, 2, 2, 8, 0, 0, 7], output: [0] },
  { input: [9, 0, 2, 5, 2, 7, 8, 0], output: [0] },
  { input: [8, 2, 9, 2, 0, 7, 5, 0], output: [0] },
  { input: [2, 8, 7, 0, 2, 0, 5, 9], output: [0] },
  { input: [7, 2, 0, 8, 2, 5, 9, 0], output: [0] },
  { input: [0, 2, 9, 2, 7, 8, 5, 0], output: [0] },

];
var learningRate = .2; // Ajuste de pesos para rede neural em relação a propagação(taxa de aprendizado)
//

//--> função que ativa os valores e ajusta os pesos(ativar os valores conforme INPUT de dados para treinamento na variavel trainingData)
//
function train() {
  for (var i = 0; i < trainingData.length; i++) {
    inputLayer.activate(trainingData[i]["input"]);
    outputLayer.activate();
    outputLayer.propagate(learningRate, trainingData[i]["output"]); // --> Aprendizado dos neuronios
  }
} 
//

//--> função que retreina  a RNA com os dados trocados de lugares no array
function retrain() {
  for (var i = 0; i < 1000; i++) {
    lodash.shuffle(trainingData);// --> Usado para efetuar trocas aleatorias no array(inverter numeros)
    train();//-->  Chama função
  }
}
//

retrain();//--> Chama função

//RESULTADOS
//
var input = inputLayer.activate([0,2,0,7,2,9,8,5]); //Ativar camada com os devidos neuronios setados passando um array de RU
var output = Math.round(outputLayer.activate());//--> Guarda resultado e arredonda para 0 e 1
if (output == 0) { //--> Validação para retornar -1 quando o mesmo não for a RU 0,2,0,7,2,9,8,5
  output = "-1"

}
console.log("INPUT:"+"["+ input +"]");//--> Mostra entrada
console.log("OUTPUT:"+ output );//--> Mostra resultado
//

// Função feita para gerar input de dados com RU'S aleatórias.
//
function generationInput(){
var lodash = require('underscore')
for (var i = 0; i < 50; i++) {
   console.log("{" + "input: " +"["+lodash.shuffle([0,2,0,7,2,9,8,5])+"], output: [0]" + "}"+",");
 }
}
//


