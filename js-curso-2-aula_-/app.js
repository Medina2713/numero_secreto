/*let listaDeNumerosSorteados = [];
let range = setRange();
let numeroSecreto = gerarNumeroAleatorio(range);
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'

exibirMensagemInicial(range);

function setRange() {
   let range = prompt('Informe o range');
   return range;
}

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
 }

function exibirMensagemInicial(range) {
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', `Selecione um número de 1 a ${range}`);  
 }
function verificarChute(){
   let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if(chute == numeroSecreto){
      exibirTextoNaTela('h1','Acertô, mizeravi');
      exibirTextoNaTela('p',`Acertou com ${tentativas} ${palavraTentativa}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
      if(chute > numeroSecreto){
         exibirTextoNaTela('p','Inferome um numero menor');
         
      }else{
         exibirTextoNaTela('p','Informe um numero maior');
         
      }
      tentativas++;
      limparCampo();
    }
    
 }
function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
 }
function gerarNumeroAleatorio(range) {
      
   numeroAleatorio = parseInt(Math.random() * range + 1);
   quantidadeDeElementos = listaDeNumerosSorteados.length;

   if(quantidadeDeElementos == range){
      listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroAleatorio)){
      return gerarNumeroAleatorio();
   }else {
      listaDeNumerosSorteados.push(numeroAleatorio);
      return numeroAleatorio;
   }
 }
function reiniciarJogo() {
   
   limparCampo();
   numeroSecreto = gerarNumeroAleatorio(range)
   exibirMensagemInicial(range);
   tentativas = 1;
   document.getElementById('reiniciar').setAttribute('disabled',true);

}*/
/* //02.08
function hello_world(){
   alert('Hello World');
}

function printaNome() {
   let nome = prompt('Qual é seu nome?');
   alert(`Olá, ${nome}`);
}
function dobroNumero(){
   let numero = prompt('informe um numero');
   alert(numero*2);
}

function mediaNumeros() {
   let valor1 = parseInt(prompt('Informe valor1'));
   let valor2 = parseInt(prompt('Informe valor2'));
   let valor3 = parseInt(prompt('Informe valor3'));
   let media = parseInt((valor1 + valor2 + valor3)/3);
   alert(media);
}

function maiorNumero(){
   let num1 = parseInt(prompt('Informe o valor 1'));
   let num2 = parseInt(prompt('Informe o valor 2'));
   let maior = Math.max(num1,num2);
   alert(maior);
}
function exponencial(){
   let num1 = parseInt(prompt('Informe o valor 1'));
   let resultado = num1 ** 2;
   alert(resultado);
}
exponencial();

 */
/*//03.07
function calculaIMC() {
   altura = parseFloat(prompt('Informe sua altura em centimetros'));
   peso = parseFloat(prompt('Informe seu peso em Kg'));
   calculo = (peso/(altura ** 2))*10000;
   alert(`O IMC é ${calculo}`);
}
function calculaFatorial() {
   let numero = parseInt(prompt('Informe o número'));
   let fatorial = 1;
   while(numero>0){
      fatorial = fatorial * numero;
      numero--;
   }
   alert(fatorial);
}
function cambioDolar() {
   dolar = parseFloat(prompt('Informe o valor em dolares'));
   real = dolar *4.8;
   alert(real);
}
function medidasCirculares() {
   raio = parseFloat(prompt('Informe o raio'));
   perimetro = 2*3.14*raio;
   area = 3.14*(raio ** 2);
   alert(`Perimetro = ${perimetro}
   \n Area = ${area}`); 
}
function calculaTabuada() {
   numero = parseInt(prompt('Informe um numero'));
   multiplicador = 1;
   alert(`Tabuada do ${numero}:\n\n
   ${numero} X 1 = ${numero*1}\n
   ${numero} X 2 = ${numero*2}\n
   ${numero} X 3 = ${numero*3}\n
   ${numero} X 4 = ${numero*4}\n
   ${numero} X 5 = ${numero*5}\n
   ${numero} X 6 = ${numero*6}\n
   ${numero} X 7 = ${numero*7}\n
   ${numero} X 8 = ${numero*8}\n
   ${numero} X 9 = ${numero*9}\n
   ${numero} X 10 = ${numero*10}\n`)
   
}
calculaTabuada();*/
//04.07
let listaNumeros = [1,2,3];
listaNumeros.push(4);
alert(listaNumeros[4]);