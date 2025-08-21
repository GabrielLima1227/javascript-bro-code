/*
    o	Propriedades: nome, preço, categoria
    o	Métodos: aplicarDesconto(), exibirInfo()
*/

class Produto{
    #preco;
    constructor(nome, preco, categoria){
    if (isNaN(preco) || preco < 0) {
        throw new Error("Preço inicial inválido. O preço deve ser um número igual ou superior a 0.");
    }
    this.nome = nome;
    this.#preco = preco;
    this.categoria = categoria;
    }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco) {
        if (isNaN(novoPreco) || novoPreco < 0) {
            throw new Error("Novo preço inválido. O preço deve ser um número igual ou superior a 0.");
        }
        this.#preco = novoPreco;
    }


    toString(){
        return `Nome: ${this.nome }, Preço: ${this.#preco}, Categoria: ${this.categoria}`
    }

    aplicarDesconto(cupomDeDesconto) {
        if (isNaN(cupomDeDesconto) || cupomDeDesconto < 0 || cupomDeDesconto > 70) {
            throw new Error("Cupom de Desconto inválido. O desconto deve ser entre 0% e 70%.");
        }
        this.#preco -= this.#preco * (cupomDeDesconto / 100);
        return this.#preco;
    }
}