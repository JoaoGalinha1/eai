// Função para abrir uma nova página com o QR Code para PIX
function abrirPix() {
    window.open('pix.html', '_blank');
}

// Função para mostrar a lista de presentes
function mostrarListaPresentes() {
    document.getElementById("lista-presentes").style.display = "block";
    document.getElementById("galerias").style.display = "none"; // Oculta galeria
}

// Função para mostrar a galeria
function mostrarGaleria() {
    document.getElementById("lista-presentes").style.display = "none"; // Oculta lista de presentes
    document.getElementById("galerias").style.display = "block";
}
