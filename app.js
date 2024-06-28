let numSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let maximoNum = 10;

function asignarTextoElemento(elemento,texto){ //Me permite agregar texto a mis elementos html
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return; 
}

function generarNumeroSecreto(){ //Me permite generar numero aleatorios para el numero secreto

    let numeroGenerado = Math.floor(Math.random()*10)+1;
     
    console.log(numeroGenerado);
    console.log(listaDeNumeros);
    
    if(listaDeNumeros.length == maximoNum){
    
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else {

    if(listaDeNumeros.includes(numeroGenerado)){

        return generarNumeroSecreto();
    
    } else {

        listaDeNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}

function validarIntentoUsuario(){ //Me permite verificar si el usuario adivino el numero secreto q el ingreso en la caja blanca.
                                  //este funcion va a realizar un comportamiento en el boton intentar.

    let numeroIngresado = parseInt(document.getElementById('valorUsuario').value);//identificando el numero ingresado en la caja

    if(numSecreto == numeroIngresado){

     asignarTextoElemento('p',`felicidades, haz encontrado el numero secreto en ${intentos} 
                        ${ intentos == 1 ? 'intento' : 'intentos'}`);
    
         document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {

        intentos++;

        if( numSecreto > numeroIngresado ){

            asignarTextoElemento('p','El numero secreto es mayor');
        } else {

            asignarTextoElemento('p','El numero secreto es menor');
        }
    }

    limpiarCajaBlanca();
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('p',`asigna un numero del 1 al ${maximoNum}`);  
    asignarTextoElemento('h1','El juego del numero secreto');
    numSecreto = generarNumeroSecreto(); 
    intentos = 1;
}
function reiniciarJuego(){

   limpiarCajaBlanca(); 
   condicionesIniciales();   
  
   document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}
function limpiarCajaBlanca(){ // Este me permite limpiar la caja cada vez q el usuario presione el boton intentar.

    return document.querySelector('#valorUsuario').value = '';
}

condicionesIniciales();
