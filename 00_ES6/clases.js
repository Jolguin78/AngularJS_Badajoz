class Libro {
    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }
};

class LibroTecnico extends Libro {
    constructor(autor,libro,tema) {
        super(autor,libro);
        this.tema = tema;
    }
};

let oLibro = new LibroTecnico("Giusseppe", "Angular fácil", "Programación");

oLibro.fecha = '2017';

console.log(oLibro);