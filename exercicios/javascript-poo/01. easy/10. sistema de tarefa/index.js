/*
    o	Classe com descrição, concluída, prioridade
    o	Métodos: concluir(), alterarPrioridade()
*/

class Tarefas{
    constructor(descricao, concluido, prioridade){
        this.#validarString(descricao, "Descrição");
        this.#validarBoolean(concluido, "Estado");
        this.#validarString(prioridade, "Prioridade");

        this.descricao = descricao;
        this.concluido = concluido;
        this.prioridade = prioridade;
    }

    #validarString(valor, nomeParametro){
        if(typeof valor !== "string" || valor.trim().length === 0){
            throw new Error(`A ${nomeParametro} da tarefa deve ser uma string válida!`);
        }
    }

    #validarBoolean(valor, nomeParametro){
        if(typeof valor !== "boolean"){
            throw new Error(`O ${nomeParametro} deve ser um valor Boolean true ou false!`);
        }
    }

    concluir(){
        if(this.concluido){
            throw new Error(`A tarefa já foi concluida!`);
        }
        this.concluido = true;
        console.log("Tarefa Concluida");
    }

    alterarPrioridade(valor){
        this.#validarString(valor, "Prioridade");
        this.prioridade = valor;
    }
}