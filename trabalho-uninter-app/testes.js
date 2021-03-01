//----------------------------------------------------------TESTES DIVERSOS--------------------------------------------------------------------//
/*
var synaptic = require('synaptic');
const { Layer, Network } = synaptic;
var inputLayer = new Layer(8);
var hiddenLayer = new Layer(9);
var outputLayer = new Layer(1);
inputLayer.project(outputLayer)
inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);
var myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer
});
//RU: 2072985
var learningRate = .3;
for (var i = 0; i < 20000; i++) {

  //myNetwork.activate([2,0,7,2,9,8,5]);
 // myNetwork.propagate(learningRate, [1]);

  myNetwork.activate([0,2,0,7,2,9,8,5]);
  myNetwork.propagate(learningRate, [0]);
  myNetwork.activate([0,2,0,6,2,9,8,8]);
  myNetwork.propagate(learningRate, [1]);
  myNetwork.activate([0,2,0,7,8,9,8,8]);
  myNetwork.propagate(learningRate, [1]);
  myNetwork.activate([0,8,0,7,2,9,8,8]);
  myNetwork.propagate(learningRate, [1]);
  myNetwork.activate([4,2,0,7,2,9,8,8]);
  myNetwork.propagate(learningRate, [1]);
  myNetwork.activate([1,2,0,7,2,9,8,8]);
  myNetwork.propagate(learningRate, [1]);

 // myNetwork.activate([]);
  //myNetwork.propagate(learningRate, []);

  //myNetwork.activate([]);
 // myNetwork.propagate(learningRate, []);

 // myNetwork.activate([]);
 // myNetwork.propagate(learningRate, []);

 // myNetwork.activate([]);
 // myNetwork.propagate(learningRate, []);

 // myNetwork.activate([]);
 // myNetwork.propagate(learningRate, []);

}


console.log(myNetwork.activate([0,2,0,7,2,9,8,5]));
console.log(myNetwork.activate([0,2,0,6,2,9,8,8]));
console.log(myNetwork.activate([0,2,0,7,2,9,8,8]));
console.log(myNetwork.activate([0,8,0,7,2,9,8,8]));
console.log(myNetwork.activate([4,2,0,7,2,9,8,8]));
console.log(myNetwork.activate([1,2,0,7,2,9,8,8]));
//console.log(myNetwork.activate([]));
//console.log(inputLayer);

//console.log(myNetwork)
//console.log(hiddenLayer)

var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
	Architect = synaptic.Architect;
function Perceptron(input, hidden, output)
{
	// create the layers
	var inputLayer = new Layer(input);
	var hiddenLayer = new Layer(hidden);
	var outputLayer = new Layer(output);

	// connect the layers
	inputLayer.project(hiddenLayer);
	hiddenLayer.project(outputLayer);

	// set the layers
	this.set({
		input: inputLayer,
		hidden: [hiddenLayer],
		output: outputLayer
	});
}

// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var myPerceptron = new Perceptron(8,9,1);
var myTrainer = new Trainer(myPerceptron);

//myTrainer.train; // { error: 0.004998819355993572, iterations: 21871, time: 356 }
//var learningRate = .3;
for (var i = 0; i < 20000; i++) {
  // 0,0 => 0

  myTrainer.train(trainingSet, {
    rate: .2,
    iterations: 20,
    error: .1,
    shuffle: true,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});
  myPerceptron.activate([[0,2,0,7,2,9,8,5]]);
 // myPerceptron.propagate(learningRate, [1]);
//myPerceptron.activate([[0,2,0,7,2,9,8,5]]); // 0.0268581547421616
//myPerceptron.activate([1,0]); // 0.9829673642853368
//myPerceptron.activate([0,1]); // 0.9831714267395621
//myPerceptron.activate([1,1]); // 0.02128894618097928
}
console.log(myPerceptron.activate([0,2,0,7,2,9,8,5]))
console.log(myNetwork.activate(testSet[0].input));
//console.log(testSet[0].output);
*/
//var lodash = require('underscore')
//var synaptic = require('synaptic'); // this line is not needed in the browser
/*
var trainingData = [
  //{input: [0,2,0,7,2,9,8,5], output: [1]},
  { input: [0], hidden: [1, 0, 0, 0, 0, 0, 0, 0], output: [1] },
  { input: [2], hidden: [0, 1, 0, 0, 0, 0, 0, 0], output: [1] },
  { input: [0], hidden: [0, 0, 1, 0, 0, 0, 0, 0], output: [1] },
  { input: [7], hidden: [0, 0, 0, 1, 0, 0, 0, 0], output: [1] },
  { input: [2], hidden: [0, 0, 0, 0, 1, 0, 0, 0], output: [1] },
  { input: [9], hidden: [0, 0, 0, 0, 0, 1, 0, 0], output: [1] },
  { input: [8], hidden: [0, 0, 0, 0, 0, 0, 1, 0], output: [1] },
  { input: [5], hidden: [0, 0, 0, 0, 0, 0, 0, 1], output: [1] },
];
var Neuron = synaptic.Neuron,
  Layer = synaptic.Layer,
  Network = synaptic.Network,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;
//function Perceptron(input, hidden, output) {
  // create the layers
//  var inputLayer = new Layer(input);
//  var hiddenLayer = new Layer(hidden);
//  var outputLayer = new Layer(output);

  // connect the layers
 // inputLayer.project(hiddenLayer);
 // hiddenLayer.project(outputLayer);

  // set the layers
 // this.set({
 //   input: inputLayer,
 //   hidden: [hiddenLayer],
 //   output: outputLayer
 // });
//}
//const trainer = new Trainer(myNetwork);
// extend the prototype chain
//Perceptron.prototype = new Network(trainingData);
//Perceptron.prototype.constructor = Perceptron;
//myNetwork.activate(trainingData[0,2,0,7,2,9,8,5]["input"]); // Whistle
//var result = myNetwork.activate(trainingData[]["output"]);
//console.log(myNetwork.activate(trainingData[0,2,0,7,2,9,8,5]["input"]))
//console.log("teste:" + result);

//var myPerceptron = new Perceptron(8, 64, 1);

var lodash = require('underscore')
for (var i = 0; i < 50; i++) {
   // lodash.shuffle([0,2,0,7,2,9,8,5]);
   console.log("{" + "input: " +"["+lodash.shuffle([0,2,0,7,2,9,8,5])+"], output: [0]" + "}"+",");
   //"{" + "input: " + lodash.shuffle(trainingData.input) +", output: [0]" + "}"
 }
 */