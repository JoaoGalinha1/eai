// Capturar o formulário de envio de recados
document.getElementById('muralRecados').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Capturar os valores inseridos pelo usuário
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && mensagem) {
        // Criar um novo div para o recado
        const recadoItem = document.createElement('div');
        recadoItem.classList.add('recado-item');
        
        // Criar o nome da pessoa que enviou o recado
        const recadoNome = document.createElement('h3');
        recadoNome.innerText = nome;
        recadoItem.appendChild(recadoNome);
        
        // Criar o parágrafo com a mensagem do recado
        const recadoMensagem = document.createElement('p');
        recadoMensagem.innerText = mensagem;
        recadoItem.appendChild(recadoMensagem);
        
        // Adicionar o recado à lista de recados
        document.getElementById('lista-recados').appendChild(recadoItem);

        // Limpar os campos de entrada do formulário
        document.getElementById('muralRecados').reset();
    }
});
