/*
    o	Classe com nome, cargo, salário
    o	Métodos: aumentarSalario(), exibirDados()
*/

class Funcionario{
    #salario;

    constructor(nome, cargo, salario){
        this.#validarParametros(nome, cargo, salario);

        this._nome = nome;
        this._cargo = cargo;
        this.#salario = salario;
    }

    #validarParametros(nome, cargo, salario){
        if(typeof nome !== "string" || nome.trim().length === 0){
            throw new Error("O nome do funcionário deve ser uma string valida!");
        }
        if(typeof cargo !== "string" || cargo.trim().length === 0){
            throw new Error("O cargo do funcionário deve ser uma string valida!");
        }
        if(isNaN(salario) || salario <= 0){
            throw new Error("O sálario do funcionario deve ser um número positivo maior que 0");
        }
    }

    get salario(){ return this.#salario}

    set salario(value){
        if(isNaN(value) || value <= 0){
            throw new Error(`O salário do funcionario ${this._nome} deve ser um número positivo maior que 0`);
        }
        this.#salario = value;
    }

    aumentarSalario(value){
        if(isNaN(value) || value <= 0){
            throw new Error("O valor do aumento sálarial do funcionario deve ser um número positivo maior que 0");
        }
        this.#salario += value;
        console.log(`O sálario do funcionario ${this._nome} após o aumento é ${this.#salario}`);
    }

    exibirDados(){
        return `Nome: ${this._nome}, Cargo: ${this._cargo}, Salário: ${this.#salario}`
    }
}

