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
