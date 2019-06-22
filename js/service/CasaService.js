class CasaService {

    static validar(casa) {
        if (!casa.nome) {
            return "Ops! O nome do casa é obrigatório."
        }
    }

    static buscarTodas() {

        let produtos = JSON.parse(localStorage.getItem("casas"))
        
        if(!casas){
            return []
        } else {
            return casas
        }
    }
}

