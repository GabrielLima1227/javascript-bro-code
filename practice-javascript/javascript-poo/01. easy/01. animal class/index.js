/*
    o	Crie classe com propriedades nome, idade, espécie
    o	Métodos: falar(), dormir(), comer()
*/

class Animal{
    constructor(nome, idade, especie){
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    falar(){
        console.log(`O ${this.nome} está falando!`);
    }

    dormir(){
        console.log(`O ${this.nome} está Dormindo!`);
    }

    comer(){
        console.log(`O ${this.nome} está Comendo!`);
    }
}

let cachorro = new Animal("Spike", 7, "Vira Lata");
cachorro.falar();
cachorro.dormir();
cachorro.comer();