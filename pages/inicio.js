function filterProducts(nicho) {
    const filtros =  [
      { nome: "ferramentas", style: { display: "block" } }, 
      { nome: "epi", style: { display: "block" } }, 
     ];
  
     if (nicho === 'ferramentas'){
        document.querySelector(".ferramentas").style.display = "flex";
        document.querySelector(".epi").style.display = "none";
        
        
    }else{
        document.querySelector(".ferramentas").style.display = "none";
        document.querySelector(".epi").style.display = "flex";
    }
    /* if (nicho === 'all') {
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
    } */
  }
  filterProducts("ferramentas")