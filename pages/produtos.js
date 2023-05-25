/* ///////////////////////////  NAVBAR   ////////////////////////////  */
const menuBotao = document.querySelector('.menuBotao');
const navLinks = document.querySelector(".navLinks")

menuBotao.addEventListener( 'click',() => {navLinks.classList.toggle('mobileMenu')});


/* /////////////////////    SEARCH BAR JS   ////////////////////// */
/* ========  VISUAL  ======= */
function toogleSearch() {
    document.querySelector('#search-bar').classList.toggle('show-search')
}

/* ======= SEARCHING ======= */
document.getElementById('search-input').addEventListener('input', function() {
  var input = this.value.toLowerCase();
  var products = document.getElementsByClassName('card');

  for (var i = 0; i < products.length; i++) {
    var productName = products[i].querySelector('.card-content h3').innerText.toLowerCase();

    if (productName.indexOf(input) > -1) {
      products[i].style.display = '';
    } else {
      products[i].style.display = 'none';
    }
  }
});


/*//////////////////////    PRODUCS FILTER /////////////////////// */
/* ====== making the filters apear (css) ==== */
function appear(){
  document.querySelector(".filter").classList.toggle('filterActive');
}

/* ======  the filtering ===== */
function filterProducts(nicho) {
  const filtros =  [
    { nome: "abafador", style: { display: "block" } }, 
    { nome: "avental", style: { display: "block" } }, 
    { nome: "calçados", style: { display: "block" } },
    { nome: "capacete", style: { display: "block" } }, 
    { nome: "equipamentos", style: { display: "block" } }, 
    { nome: "ferramentas", style: { display: "block" } },  
    { nome: "filtros", style: { display: "block" } },  
    { nome: "luvas", style: { display: "block" } }, 
    { nome: "mascaras", style: { display: "block" } }, 
    { nome: "oculos", style: { display: "block" } }
   ];

  if (nicho === 'all') {
    for( const element of filtros){
      document.querySelector("." + element.nome).style.display = "flex"
    }
  }else {
    for (const element of filtros) {
      if(element.nome === nicho){ 
        document.querySelector("." + element.nome).style.display = "flex"
      }else{
        document.querySelector("." + element.nome).style.display = "none"
      }
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