function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

    // Falar as horas e minutos
    var fala = new SpeechSynthesisUtterance(`Agora são ${hora} horas e ${minutos} minutos.`);
    window.speechSynthesis.speak(fala);

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "imagens/manha.png";
        document.body.style.background = "#e2cd9f";
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = "imagens/tarde.png";
        document.body.style.background = "#b9846f";
    } else {
        // BOA NOITE
        img.src = "imagens/noite.png";
        document.body.style.background = "#515154";
    }
}