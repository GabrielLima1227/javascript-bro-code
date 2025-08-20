/*
    o	Classe ContaBancaria com saldo, titular
    o	Métodos: depositar(), sacar(), verSaldo()
*/

class Conta{
    #saldo;

    constructor(titular, saldo){
        this.titular = titular;
        if (!isNaN(saldo) && saldo >= 0) {
            this.#saldo = saldo;
        } else {
        this.#saldo = 0;
            console.log("Saldo inicial inválido.");
        }
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        if (!isNaN(novoSaldo) && novoSaldo >= 0) {
            this.#saldo = novoSaldo;
        } else {
            console.log("Não foi possível definir o saldo: o valor é inválido ou negativo.");
        }
    }

    depositar(valor){
        if (!isNaN(valor) && valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.#saldo}`);
            return true;
        }else{
            console.log("Não foi possível processar o depósito: o valor é inválido ou negativo.");
            return false;
        }
    }

    sacar(valor){
        if (this.#saldo >= valor && valor > 0){
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.#saldo}`);
            return true;
        }else{
            console.log("Não foi possível processar o saque: o valor é inválido, negativo ou o saldo é insuficiente.");
            return false;
        }
    }
}

const conta1 = new Conta("João", 1000);

console.log("Depositando R$ 500...");
conta1.depositar(500);

console.log("\nSacando R$ 200...");
conta1.sacar(200);

console.log("\nTentando depositar um valor negativo...");
conta1.depositar(-50);

console.log("\nTentando sacar um valor maior que o saldo...");
conta1.sacar(2000);

console.log("\nVerificando o saldo atual...");
console.log(conta1.saldo);