// Função para mostrar o QR Code da chave PIX ao clicar no botão "presentear"
function mostrarPix() {
    var pixImg = document.createElement('img');
    pixImg.src = 'pix.jfif'; // QR code da chave PIX
    pixImg.style.width = '200px'; // Ajustar o tamanho do QR Code
    pixImg.style.marginTop = '20px';

    // Exibe o QR code na página
    var body = document.querySelector('body');
    body.appendChild(pixImg);
}
