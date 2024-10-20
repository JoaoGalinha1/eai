function mostrarSecao(secao) {
    // Ocultar todas as seções
    var secaoAtual = document.querySelectorAll('.section');
    secaoAtual.forEach(function(s) {
        s.style.display = 'none';
    });

    // Exibir a seção clicada
    document.getElementById(secao).style.display = 'block';
}

// Função para abrir o PIX
function abrirPix() {
    window.open('pix.html', '_blank');
}
