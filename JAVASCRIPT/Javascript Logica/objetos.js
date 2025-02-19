
let livro = {
    titulo: "Livro",
    autor: "Marcelo",
    ano: 2004,

    descricao: function(){
        console.log("Nome do livro: " + this.titulo + "\n" + "Nome do autor: " + this.autor + "\nAno publicado:" + this.ano);
    }

};

livro.descricao();

livro.ano = 1989;

livro.descricao();

livro.genero = "Romance";

delete livro.autor;

for(genero in livro){
    console.log("Genero do livro " + livro[genero]);
}