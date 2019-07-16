function listarCasas() {

    let casasCadastradas = CasaService.buscarTodas()

    for (let i = 0; i < casasCadastradas.length; i++) {

        const element = casasCadastradas[i];

        document.getElementById("catalogo").innerHTML +=
            /*html*/
            
            `
            <div class="card_container card_casa">
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
