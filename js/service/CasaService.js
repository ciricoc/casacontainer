class CasaService {

    static validar(casa) {
        if (!casa.nome) {
            return "Ops! O nome do casa é obrigatório."
        }
    }

    static buscarTodas() {

        //let produtos = JSON.parse(localStorage.getItem("produtos"))
        //console.log(produtos)
        let dados = [
            {
                descricao: "Essa é top!",
                img: "https://img.olx.com.br/images/51/512904018089228.jpg",
                nome: "Tranquilidade em Container",
                preco: "R$50.000",
            },
            {
                descricao: "Essa é top",
                img: "https://mirandacontainer.com.br/wp-content/uploads/2018/05/1.jpg",
                nome: "Sobrado de Praia",
                preco: "R$60.000",
            },
            {
                descricao: "Essa é top!",
                img: "https://painel.solidweb.com.br/uploads/72/72_2019-01-09_05-01-13_266_154538040.jpeg",
                nome: "Preto e Branco Minimalista",
                preco: "R$80.000",
            },
            {
                descricao: "1 suíte, 2 quartos, 1 banheiro, varanda com área de lazer, cozinha americana e sala de estar acoplada",
                img: "https://images.adsttc.com/media/images/583b/55e4/e58e/cebc/9300/00b4/slideshow/CasaCont2016_17.jpg?1480283613",
                nome: "Container Modernista",
                preco: "R$200.000",
            },
            {
                descricao: "2 suítes, escritório, ampla sala de estar, cozinha",
                img: "https://static1.squarespace.com/static/58554e369de4bb1925e4a0d6/t/5893c06be4fcb5b66bf3705e/1509235617641/OliveroBlandstudio_ContainerHome_02?format=750w",
                nome: "Madeira e Concreto Modernista",
                preco: "R$180.000",
            }

        ]

        let dadosJson = JSON.stringify(dados)

        localStorage.setItem("dados", dadosJson)
        let casas = JSON.parse(localStorage.getItem("dados"))
        
        if(!casas){
            return []
        } else {
            return casas
        }
    }
}

