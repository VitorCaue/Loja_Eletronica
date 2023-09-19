// Função para exibir os produtos do carrinho na página "carrinho.html"

function exibirProdutosNoCarrinho() {
    const carrinhoItems = document.getElementById("carrinho-items");
    const precoTotalElement = document.getElementById("preco-total");
    let precoTotal = 0;

    carrinhoItems.innerHTML = ""; // Limpa a lista de itens do carrinho

    carrinho.forEach((produto) => {
        const totalProduto = produto.preco * produto.quantidade;
        precoTotal += totalProduto;

        const itemHTML = `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>R$${produto.preco.toFixed(2)}</td>
                <td>R$${totalProduto.toFixed(2)}</td>
            </tr>
        `;

        carrinhoItems.innerHTML += itemHTML;
    });

    precoTotalElement.textContent = `R$${precoTotal.toFixed(2)}`;
}

// Recupera o carrinho do armazenamento local (localStorage)
const carrinhoJSON = localStorage.getItem('carrinho');
if (carrinhoJSON) {
    carrinho = JSON.parse(carrinhoJSON);
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = []; // Define o carrinho como um array vazio
    localStorage.removeItem('carrinho'); // Remove o carrinho do armazenamento local
    exibirProdutosNoCarrinho(); // Atualiza a exibição do carrinho (todos os itens foram removidos)
}


// Chama a função para exibir os produtos do carrinho
exibirProdutosNoCarrinho();
