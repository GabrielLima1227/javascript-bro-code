/*
    o	Crie uma função que verifique se uma string contém "@" e "."
    o	Retorne true ou false
*/

function verificarEmail(email) {
    const temArroba = email.includes('@');
    const temPonto = email.includes('.');

    return temArroba && temPonto;
}

console.log(verificarEmail('email@exemplo.com')); 
console.log(verificarEmail('email.exemplo@com')); 
console.log(verificarEmail('email@exemplo'));    
console.log(verificarEmail('emailexemplo.com')); 
console.log(verificarEmail(''));                 