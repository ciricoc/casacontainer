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
                descricao: "Esse é top!",
                img: "https://images.colombo.com.br/produtos/697176/697176_Sofa2LLarissa_947_1_z.jpg?ims=450x450",
                nome: "Sofá Lorfsafsaem",
                preco: "R$3.04535400,00",
            },
            {
                descricao: "Esseefsdadfaf é top!",
                img: "https://images.colombo.com.br/produtos/697176/697176_Sofa2LLarissa_947_1_z.jpg?ims=450x450",
                nome: "Sofá Lofsafasfrem",
                preco: "R$3.024200,00",
            },
            {
                descricao: "Esfafsafase é top!",
                img: "https://images.colombo.com.br/produtos/697176/697176_Sofa2LLarissa_947_1_z.jpg?ims=450x450",
                nome: "Sofá Lfasfasorem",
                preco: "R$3.002420,00",
            },

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

