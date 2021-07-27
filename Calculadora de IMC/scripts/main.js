let botaoCalcular = document.getElementById("btnCalcular");

function calcularIMC(){
  
  let altura = document.getElementById("altura").value/100;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");
  
  let imc = (peso/(altura*altura)).toFixed(2);
  //let msg = "";
  
  if(altura !== "" && peso !== ""){
    if(imc < 18.5){
      resultado.textContent = 'Seu IMC e '+imc+"\n"+"Voce esta abaixo do peso";
    }else if(imc > 18.5){
      resultado.textContent = 'Seu IMC e '+imc+"\n"+"Voce esta no peso ideal";
    }else if(imc < 25){
      resultado.textContent = 'Seu IMC e '+imc+"\n"+"Voce esta com sobrepeso";
    }else if(imc < 30){
      resultado.textContent = 'Seu IMC e '+imc+"\n"+"Voce esta com obesidade grau 1";
    }else if(imc < 35){
      resultado.textContent = 'Seu IMC e '+imc+"\n"+"Voce esta com obesidade grau 2";
    }else if(imc <= 40){
      resultado.textContent = 'Seu IMC e '+imc+"\n"+"Voce esta com obesidade grau 3 ou morbida";
    }
  }else{
  resultado.textContent = "Digite algo nos campos";
}
  
}

botaoCalcular.addEventListener('click', calcularIMC);