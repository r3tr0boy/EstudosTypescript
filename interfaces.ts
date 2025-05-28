interface Cliente {
    nome: String
    cnpj: String
}

function criarCliente(nome: string, cnpj: string): Cliente {
    return {nome, cnpj}
}

const cliente = criarCliente("empresa ltda", "12384833");

console.log(cliente)
