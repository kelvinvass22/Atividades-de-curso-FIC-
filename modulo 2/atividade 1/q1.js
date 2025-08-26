let carrinho = ["arroz", "feijão", "leite", "pão", "macarrão"]

function checarProduto(prod) {
    if (carrinho.includes(prod)) {
        console.log("Item encontrado")
    } else {
        console.log("Item não está na lista")
    }
}
verificarItem("leite")
verificarItem("café")
