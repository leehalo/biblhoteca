import {LivroCategoria} from './livro'

const listaDeLivros = [
    new LivroCategoria("O mistério do Mediterrâneo", "Agatha Cristie", 1995, "Suspense"),
    new LivroCategoria("O segredo de Emma", "leticia", 2005, "Romance"),
    new LivroCategoria("A culpa das estrelas", "anonimo", 1980, "Drama"),
  ];

  listaDeLivros.forEach((livro) => {
    livro.exibirDetalhes(); 
    const antigo = livro.antigo();
    console.log(` antigo: ${antigo}`);
    console.log("-----");
  });