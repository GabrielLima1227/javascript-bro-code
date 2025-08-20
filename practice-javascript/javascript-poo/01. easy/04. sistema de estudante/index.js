/*
    o	Classe com nome, idade, curso, notas
    o	Método para calcular média das notas
*/

class Estudante{
    #curso;
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
                if (!isNaN(nota) && nota > 0) {
                    return true;
                } else{
                    return false;
                }
            }
        );
    }
}