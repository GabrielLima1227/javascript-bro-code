/*
    o	Propriedades: marca, modelo, ano, ligado
    o	Métodos: ligar(), desligar(), acelerar()    
*/

class Carro{
    constructor(marca, modelo, ano, ligado){
        this.#validarString(marca, "Marca");
        this.#validarString(modelo, "Modelo");
        this.#validarNumber(ano, "Ano");
        this.#validarBoolaen(ligado, "Estado");

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = ligado;
    }

    #validarString(valor, nomeParametro) {
        if (typeof valor !== "string" || valor.trim().length === 0) {
            throw new Error(`O ${nomeParametro} do carro deve ser uma string válida!`);
        }
    }

    #validarNumber(valor, nomeParametro) {
        if(isNaN(valor) || valor <= 0) {
            throw new Error(`O ${nomeParametro} do carro deve ser um valor inteiro e positivo!`);
        }
    }

    #validarBoolaen(valor, nomeParametro) {
            if(typeof valor !== "boolean"){
                throw new Error(`O ${nomeParametro} deve ser um valor Boolean true ou false!`);
            }
    }

    ligar(){
        if(this.ligado){
            throw new Error("O carro já está ligado!")
        }
        this.ligado = true;
        console.log("O carro Ligou!");
    }

    desligar(){
        if(!this.ligado){
            throw new Error("O carro já está desligado!")
        }
        this.ligado = false;
        console.log("O carro desligou!");
    }

    acelerar(){
        if(!this.ligado){
            throw new Error("O carro está desligado logo não poder acelerar!")
        }
        console.log("O carro está acelerando!");
    }
}