function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
                <h3>${categoria}</h3>
                <div class="pergunta">
                    ${pergunta}
                </div>
                <div class="resposta">
                    ${resposta}
                </div>
            </div>
    `

    container.appendChild(cartao)
}

function adicionarNovoCard() {
  let categoria = prompt("Digite a categoria do card:");
    let pergunta = prompt("Digite a pergunta do card:");
    let resposta = prompt("Digite a resposta do card:");

    if (categoria && pergunta && resposta) {
        criar_cartao(categoria, pergunta, resposta);
    } else {
        alert("Por favor, preencha todos os campos para criar um novo card.");
    }
}
