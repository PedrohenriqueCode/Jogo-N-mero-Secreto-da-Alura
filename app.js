alert(`Boas vindas ao jogo de número secreto`);
let numeroSecreto = 21;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto palpite não for igual ao número secreto 
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 40');
    //Se chute for igual ao número Secreto 
    if (chute == numeroSecreto){
        alert(`Isso aí !!! Você descobriu o número Secreto ${numeroSecreto} com ${tentativas} tentativas. `);
        
    } else { 
        if ( chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++ ;
    }
}    