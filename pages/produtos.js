//NavBar
const menuBotao = document.querySelector('.menuBotao');
const navLinks = document.querySelector(".navLinks")

menuBotao.addEventListener( 'click',() => {navLinks.classList.toggle('mobileMenu')})

//Seletor de itens
function filterProducts(nicho) {
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var nichoProduto = card.getAttribute('data-nicho');

      if (nicho === 'all' || nichoProduto === nicho) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  }


//Mostrar detalhes dos produtos

/* function mostrarDetalhes(produto) {
    // Defina as informações do produto
    var titulo = "";
    var descricao = "";

    if (produto === "produto1") {
      titulo = "Produto 1";
      descricao = "Descrição do Produto 1";
    } else if (produto === "produto2") {
      titulo = "Produto 2";
      descricao = "Descrição do Produto 2";
    } else if (produto === "produto3") {
      titulo = "Produto 3";
      descricao = "Descrição do Produto 3";
    }

    // Atualize o conteúdo dos detalhes do produto
    document.getElementById("detalhes-titulo").textContent = titulo;
    document.getElementById("detalhes-descricao").textContent = descricao;

    // Exiba os detalhes do produto
    document.getElementById("detalhes-overlay").classList.add("active");
    document.getElementById("detalhes").style.display = "block";
  }

  function fecharDetalhes() {
    // Feche os detalhes do produto
    document.getElementById("detalhes-overlay").classList.remove("active");
    document.getElementById("detalhes").style.display = "none";
  } */