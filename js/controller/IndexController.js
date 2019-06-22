function listarCasas() {

    let casasCadastradas = CasaService.buscarTodas()

    for (let i = 0; i < casasCadastradas.length; i++) {

        const element = casasCadastradas[i];

        document.getElementById("casas").innerHTML +=
            /*html*/`
            <div class="card-casa">
                <img src=${element.img} alt=${element.nome}>
                <div class="card-casa-descricao">
                    <h2>${element.nome}</h2>
                    <p>${element.descricao}</p>
                    <p>${element.preco}</p>
                </div>
            </div>
    }

}