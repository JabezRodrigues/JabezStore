let botaoAbrir = document.querySelector("#abrir");
let botaoFechar = document.querySelector("#fechar");
let container = document.querySelector("#carrinho");

botaoAbrir.addEventListener("click", function () {
  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
});

botaoFechar.addEventListener("click", function () {
  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
});
