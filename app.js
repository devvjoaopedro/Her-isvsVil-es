function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let Titulo = "";
    let Descricao = "";
    let tags = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value
 
    if (!campoPesquisa) {
      section.innerHTML = "<p>Você não digitou algo no campo de pesquisa</p>"
       return
    }

    campoPesquisa = campoPesquisa.toLowerCase() 

    // Itera sobre cada objeto (personagem) no array 'dados'
    for (let dado of dados) {
      Titulo = dado.Titulo.toLocaleLowerCase()
      Descricao = dado.Descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo includes campoPesquisa
      if(Titulo.includes(campoPesquisa) || Descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)){

        // Concatena HTML para cada personagem, formatando os dados
        resultados += `
        <div class="item-resultado">
          <h2>${dado.Titulo}</h2>
          <p class="descricao-meta">
           
            ${dado.Descricao}
            <a href=${dado.Link} target="_blank">Saiba mais</a>
          </p>
        </div>
      `;
      }
      
    }
    if(!resultados) {
      resultados = "<p>Não encontrado</p>";
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

