class CarrinhoService {

    static carregarCarrinho(){
        let carrinho = JSON.parse(localStorage.getItem("carrinho"))
        if(!carrinho){
            return []
        } else{
            return carrinho
        }
    }
}