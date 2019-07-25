let casasCadastradas = CasaService.buscarTodas()

function listarCasas() {

    document.querySelector('body').style.animation = "zoom-out 0.5s"

    for (let i = 0; i < casasCadastradas.length; i++) {

        const element = casasCadastradas[i];

        document.getElementById("catalogo").innerHTML +=
            /*html*/            
            `
            <div class="card_container card_casa" onClick="selecionarCasas(${i})">
                <img src=${element.img} alt=${element.nome}>
                <p>${element.nome}</p>
                <div class="row">
                    <span>${element.preco}</span>
                    <button type="button">ver mais</button>
                </div>
            </div>
            `
    }

}

function selecionarCasas(i) {
    CasaService.selecionarCasa(casasCadastradas[i])
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        location.href = "casa.html"
    }, 450);
}

function openDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'abrir-menu 0.3s ease'
    document.querySelector('.drawer').style.animation = 'fade-in-fundo 0.3s ease'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'flex'
        document.querySelector('body').style.overflowY = 'hidden'
    }, 300);
}

function closeDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'fechar-menu 0.3s ease'
    document.querySelector('.drawer').style.animation = 'fade-out-fundo 0.3s ease'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'none'
        document.querySelector('body').style.overflowY = 'scroll'
    }, 300);   
    
}
