document.querySelector('body').style.animation = "zoom-out 0.4s"

setTimeout(() => {
    document.querySelector('body').style.opacity = "1"
}, 400);

function voltar() {
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        history.go(-1)
    }, 450);
}

function salvar(){
    let casa = {}
    casa.img = document.getElementById('imagem').value
    casa.nome = document.getElementById('nome').value
    casa.descricao = document.getElementById('descricao').value
    casa.preco = document.getElementById('preco').value
    
    CasaService.cadastrar(casa)
    alert("Casa salva com sucesso!")

    document.querySelector('body').style.animation = "zoom-in 0.5s"
    
    setTimeout(() => {
        location.href = "index.html"
    }, 450);

}
