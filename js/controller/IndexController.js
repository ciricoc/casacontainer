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