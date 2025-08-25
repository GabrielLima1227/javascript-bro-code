/*
    o	Propriedade raio
    o	Métodos para área, perímetro e diâmetro
*/

class Circulo {
    constructor(raio) {
        if (typeof raio !== 'number' || isNaN(raio) || raio <= 0) {
            throw new Error("O raio do círculo deve ser um número positivo.");
        }
        this.raio = raio;
    }

    diametro() {
        return this.raio * 2;
    }

    perimetro() {
        return 2 * Math.PI * this.raio;
    }

    area() {
        return Math.PI * (this.raio ** 2);
    }
}