//VARIABLES
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'; 
let maximosIntentos = 6;

//console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){

    let numeroUsuario = parseInt(prompt (`Enter a number plis entre 1 and ${numeroMaximoPosible}`)); //Parseint convierte a datos enteros

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto ){
        alert(`Acertaste el numero que es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    }else{
        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else{
            alert("El numero secreto es mayor");
        }
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';

        if (intentos > 6){
            alert (`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }

}

