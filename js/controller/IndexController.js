function listarCasas() {

    let casasCadastradas = CasaService.buscarTodas()

    for (let i = 0; i < casasCadastradas.length; i++) {

        const element = casasCadastradas[i];

        document.getElementById("produtos").innerHTML +=
            /*html*/`
            <div class="card-produto">
                <img src=${element.img} alt="Sofá">
                <div class="card-produto-descricao">
                    <h2>${element.nome}</h2>
                    <p>${element.descricao}</p>
                    <p>${element.preco}</p>
                </div>
            </div>
            
            `
    }

}