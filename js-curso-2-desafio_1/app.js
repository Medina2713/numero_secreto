let titulo1 = document.querySelector('h1');
titulo1.innerHTML = 'Hora do desafio';

function botãoConsole(){
    console.log('Botão Console foi apertado');
}
function botãoAlerta(){
    console.log('Botão Alerte foi apertado');
}   
function botãoPrompt(){
    cidade = prompt('Informe a cidade:');
    alert(`Estive em ${cidade} e me lembrei da tua mãe`);
} 
function botãoSoma(){
    let valor1 = parseInt(prompt('Informe o valor 1'));
    let valor2 = parseInt(prompt('Informe o valor 2'));
    soma = valor1 + valor2;
    console.log(soma);
    alert(`Soma dos valores é ${soma}`);
}