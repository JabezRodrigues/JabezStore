function adicionarAoCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const cardProdutoCarrinho = `
  <article class="cardzinho">
      
      <button><i style="color: rgb(2, 6, 23);" class="fa-solid fa-xmark"></i></button>
      
      <img src="assets/img/product-1.jpg" alt="Produto1">
      <div class="textos">
          <p style="color: rgb(2, 6, 23); font-size: 14px;">
          Aliança</p>
          <p style="color: rgba(4, 8, 24, 0.555); font-size: 12px;">
          Tamanho : 18 </p>
          <p style="color: rgb(41, 136, 87); font-size: 14px;"> $-- </p>
      </div>
  </article>`;

  containerProdutosCarrinho.innerHTML += cardProdutoCarrinho;
}

// UTILIDADES

const catalogo = [
  {
    id: 1,
    marca: "AristoPrata",
    nome: "Aliança",
    preco: "--",
    imagem: "product-1",
    feminino: false,
  },
  {
    id: 2,
    marca: "DarkSide",
    nome: "LIVRO Vitorianas Macabras",
    preco: "--",
    imagem: "product-2",
    feminino: true,
  },
  {
    id: 3,
    marca: "",
    nome: "Colar com Inicial",
    preco: "--",
    imagem: "product-3",
    feminino: false,
  },
  {
    id: 4,
    marca: "Zara",
    nome: "Chaveiro Stitch",
    preco: "--",
    imagem: "product-4",
    feminino: false,
  },
  {
    id: 5,
    marca: "Hits",
    nome: "Esmalte Hits Caracas",
    preco: "--",
    imagem: "product-5",
    feminino: false,
  },
  {
    id: 6,
    marca: "??",
    nome: "Moletom Roubado",
    preco: "--",
    imagem: "product-6",
    feminino: true,
  },
  {
    id: 7,
    marca: "Girassois",
    nome: "Buquê de Girassóis",
    preco: "--",
    imagem: "product-7",
    feminino: true,
  },
  {
    id: 8,
    marca: "??",
    nome: "Sueter preto Roubado",
    preco: "--",
    imagem: "product-8",
    feminino: true,
  },
  {
    id: 9,
    marca: "Rua/Lojas",
    nome: "Rosas",
    preco: "--",
    imagem: "product-9",
    feminino: true,
  },
];

// RENDERIZAR CATÁLOGOS

for (produtoCatalogo of catalogo) {
  const cartaoProduto = `<div  class="card-produto" id ="card-produto ${produtoCatalogo.id} ">
  
      <img src="assets/img/${produtoCatalogo.imagem}.jpg" alt="" style="height:260px;">
      <p class = "nomeProduto">${produtoCatalogo.nome}</p>
      <p class = "marcaProduto" >${produtoCatalogo.marca}</p>
      <p class = "precoProduto">R$ ${produtoCatalogo.preco}</p>
      <button  id = "adicionar-${produtoCatalogo.id}"  class="botao-adicionar"><i class="fa-solid fa-cart-plus"></i></i></button>
    </div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto;
}

for (produtoCatalogo of catalogo) {
  if (produtoCatalogo.id !== 1) {

    document.getElementById(`adicionar-${produtoCatalogo.id}`).innerHTML = `<i class="fa-solid fa-ban"></i>`;

  } else {

    let botao = document.getElementById(`adicionar-${produtoCatalogo.id}`);

    document
    .getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", adicionarAoCarrinho);

    document
    .getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", function () {
        botao.innerHTML = `<i class="fa-solid fa-ban"></i>`;
        document.getElementById("carrinho").style.display = "block";
      })
  }
}


// ----------------------------

const botaoFinalizar  = document.getElementById("botaofinalizar");
botaoFinalizar.addEventListener("click", function () {
  document.getElementById("main").style.display = "none";
  document.getElementById("main2").style.display = "block";
  document.getElementById("carrinho").style.display = "none";
  
})