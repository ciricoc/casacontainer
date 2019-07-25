class CasaService {

    static validar(casa) {
        if (!casa.nome) {
            return "Ops! O nome do casa é obrigatório."
        }
    }

    static buscarTodas() {

        let casas = JSON.parse(localStorage.getItem("casas"))
        
        if(!casas){
            return []
        } else {
            return casas
        }
    }

    static selecionarCasa(casa) {
        localStorage.setItem("casaSelecionada", JSON.stringify(casa))
    }

    static buscarCasaSelecionada() {
        return JSON.parse(localStorage.getItem("casaSelecionada"))
    }

    static cadastrar(casa) {
        let cadastradas = CasaService.buscarTodas();
        cadastradas.push(casa)
        localStorage.setItem('casas', JSON.stringify(cadastradas))
    }
}

