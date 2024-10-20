// Função para alternar as seções
function mostrarSecao(secao) {
    var secoes = document.getElementsByClassName('secao');
    for (var i = 0; i < secoes.length; i++) {
        secoes[i].style.display = 'none';
    }
    document.getElementById(secao).style.display = 'block';
}

// Função para abrir uma nova página com o QR Code para PIX
function abrirPix() {
    window.open('pix.html', '_blank');
}

document.getElementById('muralRecados').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && mensagem) {
        const recadoItem = document.createElement('div');
        recadoItem.classList.add('recado-item');
        
        const recadoNome = document.createElement('h3');
        recadoNome.innerText = nome;
        recadoItem.appendChild(recadoNome);
        
        const recadoMensagem = document.createElement('p');
        recadoMensagem.innerText = mensagem;
        recadoItem.appendChild(recadoMensagem);
        
        document.getElementById('lista-recados').appendChild(recadoItem);

        // Limpar formulário
        document.getElementById('muralRecados').reset();
    }
});
