function selecionarEstilo() {
    let opcao_estilo = document.getElementById("estilo").value;
    let estilo;
    switch (opcao_estilo) {
      case "1":
        estilo = "Ação";
        break;
      case "2":
        estilo = "Comédia";
        break;
      case "3":
        estilo = "Drama";
        break;
      case "4":
        estilo = "Terror";
        break;
      case "5":
        estilo = "Ficção Científica";
        break;
      case "6":
        estilo = "Romance";
        break;
      default:
        estilo = null;
        break;
    }
    let resultado_estilo = document.getElementById("resultado_estilo");
    if (estilo) {
      resultado_estilo.textContent = "Seu estilo de filme favorito é: " + estilo;
    } else {
      resultado_estilo.textContent = "Opção inválida.";
    }
}

function selecionarGenero() {
    let opcao_genero = document.getElementById("genero").value;
    let genero;
    switch (opcao_genero) {
      case "1":
        genero = "Rock";
        break;
      case "2":
        genero = "Pop";
        break;
      case "3":
        genero = "Hip Hop";
        break;
      case "4":
        genero = "Eletrônica";
        break;
      case "5":
        genero = "Jazz";
        break;
      case "6":
        genero = "Clássica";
        break;
      default:
        genero = null;
        break;
    }
    let resultado_genero = document.getElementById("resultado_genero");
    if (genero) {
      resultado_genero.textContent = "Seu gênero musical preferido é: " + genero;
    } else {
      resultado_genero.textContent = "Opção inválida.";
    }
}

function selecionarJogo() {
    let opcao_jogo = document.getElementById("jogo").value;
    let jogo;
    switch (opcao_jogo) {
      case "1":
        jogo = "The Sims";
        break;
      case "2":
        jogo = "Life Is Strange";
        break;
      case "3":
        jogo = "Red Dead Redemption 2";
        break;
      case "4":
        jogo = "The Last Of Us";
        break;
      case "5":
        jogo = "Hollow Knight";
        break;
      case "6":
        jogo = "God Of War";
        break;
      default:
        jogo = null;
        break;
    }
    let resultado_jogo = document.getElementById("resultado_jogo");
    if (jogo) {
      resultado_jogo.textContent = "O jogo escolhido foi: " + jogo;
    } else {
      resultado_jogo.textContent = "Opção inválida.";
    }
}
