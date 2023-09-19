// Variável para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho(nome, preco) {
    const produtoNoCarrinho = carrinho.find((produto) => produto.nome === nome);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    // Salva o carrinho no armazenamento local (localStorage)
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}


// Adicione um evento de clique a todos os botões "Comprar"
const botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();
        const produtoNome = event.target.parentElement.querySelector("h3").textContent;
        const produtoPreco = parseFloat(event.target.parentElement.querySelector(".preco").textContent.replace("R$", "").trim());
        adicionarProdutoAoCarrinho(produtoNome, produtoPreco);
    });
});
