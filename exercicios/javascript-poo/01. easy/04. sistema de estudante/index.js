/*
    o	Classe com nome, idade, curso, notas
    o	Método para calcular média das notas
*/

class Estudante{
    #curso;
    #media;
    #notas = [];

    constructor(nome, idade, curso, ...notas){
        this.nome = nome;
        if (!isNaN(idade) && idade > 0) {
            this._idade = idade;
        } else {
            throw new Error('Idade inicial inválida. A idade deve ser superior a 0.');
        }
        this.#curso = curso;
        /* Forma Simplificada: this.#notas = notas.filter((nota) => !isNaN(nota) && nota > 0); */
        this.#notas = notas.filter(
            (nota) => {
                if (!isNaN(nota) && nota >= 0) {
                    return true;
                } else{
                    return false;
                }
            }
        )
        this.#media = null;
    }

    media(){
        if(this.#notas.length === 0){ return "Falha: Ocorreu um erro inesperado:"}

        this.#media = this.#notas.reduce((somatorio, nota) => {
            return somatorio += nota;
        }, 0) / this.#notas.length;

        return this.#media;
    }
}

console.log("\nTeste 1: Criação com dados válidos");
const estudante1 = new Estudante("João", 20, "Engenharia", 7.5, 8.0, 9.0);
console.log("Sucesso: Estudante criado corretamente.");
console.log("Nome:", estudante1.nome);
console.log("Idade:", estudante1._idade);
console.log("Média calculada:", estudante1.media());


console.log("\nTeste 2: Idade inválida (0)");
new Estudante("Maria", 0, "Medicina", 8.5, 9.0);
console.error("Falha: O erro de idade inválida não foi lançado.");

console.log("\nTeste 3: Idade inválida (-5)");
new Estudante("Pedro", -5, "Direito", 6.0, 7.0);
console.error("Falha: O erro de idade inválida não foi lançado.");