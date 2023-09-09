

    for (produtoCatalogo of catalogo) {
            
        const cartaoProduto = `<div class="card-produto" id ="card-produto ${produtoCatalogo.id} ">
        <img src="assets/img/${produtoCatalogo.imagem}.jpg" alt="" style="height:300px;">
        <p >${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>R$ ${produtoCatalogo.preco}</p>
        <button>Adicionar</button>
        </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;


    }
