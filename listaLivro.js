"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var listaDeLivros = [
    new livro_1.LivroCategoria("Livro 1", "Autor 1", 1995, "Aventura"),
    new livro_1.LivroCategoria("Livro 2", "Autor 2", 2005, "Romance"),
    new livro_1.LivroCategoria("Livro 3", "Autor 3", 1980, "Mistério"),
];
listaDeLivros.forEach(function (livro) {
    livro.exibirDetalhes();
    var antigo = livro.antigo();
    console.log(" antigo: ".concat(antigo));
    console.log("-----");
});
