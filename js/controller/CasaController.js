let casaSelecionada = CasaService.buscarCasaSelecionada()

function carregarCasa() {
    document.querySelector('body').style.animation = "zoom-out 0.5s"
    document.getElementById("imagem").src = casaSelecionada.img
    document.getElementById("navbarTitle").innerHTML = casaSelecionada.nome
    document.getElementById("nome").innerHTML = casaSelecionada.nome
    document.getElementById("descricao").innerHTML = casaSelecionada.descricao
    document.getElementById("preco").innerHTML = casaSelecionada.preco

    setTimeout(() => {
        document.querySelector('body').style.opacity = 1
    }, 500);

}

function adicionarCarrinho() {
    let quantidade = document.getElementById("quantidade").value
    let item = {
        quantidade: quantidade,
        casa: casaSelecionada
    }
    CarrinhoService.adicionarItem(item)
    alert("Casa adicionada com sucesso!")
    document.getElementById("quantidade").value = ""
}

function voltar() {
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        history.go(-1)
    }, 450);
}