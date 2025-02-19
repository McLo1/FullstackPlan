

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-livro");
  const listaLivros = document.getElementById("lista-livros");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;
    const livroItem = document.createElement("li");
    livroItem.textContent = `${titulo} por ${autor} (${ano})
    `;
    
    const botaoremover = document.createElement("button");
    botaoremover.textContent = "❌";
    botaoremover.classList.add("remover-livro");
                                                                //Cria um botão para remover o livro
    botaoremover.addEventListener("click", function(){

      if(listaLivros.contains(livroItem)){
        listaLivros.removeChild(livroItem);
      } else if(livrosfavoritos.contains(livroItem)){
        livrosfavoritos.removeChild(livroItem);
      }

    })
    
    const livrosfavoritos = document.getElementById("livros-Favoritos")
    const botaofavoritos = document.createElement("button");
    botaofavoritos.textContent = "★";
    botaofavoritos.classList.add("favoritar-item");
                                                                //Cria um botão para favoritar o livro
    botaofavoritos.addEventListener("click", function(){

      if(listaLivros.contains(livroItem)){
        listaLivros.removeChild(livroItem);
        livrosfavoritos.appendChild(livroItem);
      } else if(livrosfavoritos.contains(livroItem)){
        livrosfavoritos.removeChild(livroItem);
        listaLivros.appendChild(livroItem);
      }

    })
  

    //Sistema de classificação de livros

    for(let i = 0; i < 5; i++){
        const classificacao = document.createElement("button");
        classificacao.textContent = "";
        livroItem.appendChild(classificacao);


        classificacao.classList.add("vazia");

        classificacao.addEventListener("click", function(){

          for(let j = 0; j < i; j++){
            if(j <= i){
              livroItem.children[j].classList.remove("vazia");
              livroItem.children[j].classList.add("preenchida");
            }else{
              livroItem.children[j].classList.remove("preenchida");
              livroItem.children[j].classList.add("vazia");
            }
          }
        })
    }

    livroItem.appendChild(botaofavoritos);
    livroItem.appendChild(botaoremover);
    listaLivros.appendChild(livroItem);
    livroItem.appendChild(classificacao);

    form.reset();
  });
});


    