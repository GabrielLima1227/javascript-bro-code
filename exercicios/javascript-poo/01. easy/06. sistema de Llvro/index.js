/*
    o	Classe com título, autor, páginas, disponível
    o	Métodos: emprestar(), devolver()
*/

class Livro {
    constructor(titulo, autor, paginas, disponivel) {
        if (isNaN(paginas) || paginas <= 0) {
            throw new Error("Páginas deve ser um número positivo.");
        }

        if (typeof disponivel !== 'boolean') {
            throw new Error("Disponibilidade deve ser um valor booleano.");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.disponivel = disponivel;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro "${this.titulo}" foi emprestado com sucesso!`);
            return true;
        }
        console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
        return false;
    }

    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log(`O livro "${this.titulo}" foi devolvido com sucesso!`);
            return true;
        }
        console.log(`O livro "${this.titulo}" já está disponível e não pode ser devolvido.`);
        return false;
    }
}