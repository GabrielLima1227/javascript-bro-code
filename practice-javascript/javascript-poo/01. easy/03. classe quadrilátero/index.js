/*
    o	Propriedades largura e altura
    o	Métodos para calcular área e perímetro
*/

class Quadrilatero{
    #largura;
    #altura;

    constructor(largura, altura){
        if (!isNaN(largura) && largura > 0 ){
            this.#largura = largura;
        }else{
            throw new Error("Largura inicial inválida. A largura deve ser um número superior a 0");
        }
        if (!isNaN(altura) && altura > 0 ){
            this.#altura = altura;
        }else{
            throw new Error("Altura inicial inválida. A altura deve ser um número superior a 0");
        }
    }

    get largura(){
        return this.#largura;
    }

    set largura(novaLargura){
        if (!isNaN(novaLargura) && novaLargura > 0 ){
            this.#largura = novaLargura;
        }else{
            console.log("Largura inicial inválida. A largura deve ser um número superior a 0");
        }
    }  

    get altura(){
        return this.#altura;
    }

    set altura(novaAltura){
        if (!isNaN(novaAltura) && novaAltura > 0 ){
            this.#altura = novaAltura;
        }else{
            console.log("Altura inicial inválida. A altura deve ser um número superior a 0");
        }
    }

    area(){
        console.log(`A área do quadrilátero é de ${this.altura * this.largura}m²`);
    }

    perimetro(){
        console.log(`O perímetro do quadrilátero é de ${2 * (this.altura + this.largura)}m`);
    }
}

const retangulo = new Quadrilatero(10, 5);
console.log(`Retângulo de largura ${retangulo.largura}m e altura ${retangulo.altura}m.`);
retangulo.area();
retangulo.perimetro();

const invalido = new Quadrilatero("dez", -2); 
console.log(invalido);

const quadrado = new Quadrilatero(8, 8);
console.log(`Quadrado de largura ${quadrado.largura}m e altura ${quadrado.altura}m.`);
quadrado.area();
quadrado.perimetro();