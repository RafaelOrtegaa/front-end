const video = document.getElementById("cameraFeed")
const canvas = document.getElementById("capturedImage")
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

// Solicitar permissão para acessar a câmera 
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

//atribuir uma função ao botão de captura
botao.addEventListener("click", () => {
    // Desenhar o quadro atual do vídeo na area do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    //obter a imagem capturada como um data URL 
    const imagemDataURL = canvas.toDataURL("image/png");
    //enviar a imagem para o servidor 
    enviarImagem(imagemDataURL);
});


    //função para enviar a imagem para o servidor
    function enviarImagemParaServidor(imagemDataURL){
    //simular o envio da imagem para o servidor
    console.log("Enviando imagem para o servidor...");
    fetch("/", {
        method: "POST",
        body: JSON.stringify({ image: imagemDataURL }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then( resposta => resposta.json())
        .then( dados => {
            console.log("Resposta do servidor: ", dados);
        })
        .catch( erro => {
            console.error("Erro ao enviar a imagem: ", erro);
        })



}