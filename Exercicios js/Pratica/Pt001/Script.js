function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    var seg = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minu}:${seg}`

    if (hora >= 6 && hora <= 12) {
        // BOM DIA
        img.src = 'Imagems/tarde2.jpg'
        document.body.style.background = "linear-gradient(to bottom, #dfae4f, #677d9f )"
    } else if (hora >= 12 && hora <= 18) { 
        // BOA TARDE
        img.src = 'Imagems/tarde3.webp'
        document.body.style.background =  "linear-gradient(to bottom, #677d9f,#dfae4f"
    } else{
        // BOA NOITE
        img.src = 'Imagems/noite2.jpg' 
        document.body.style.background = "linear-gradient(to bottom, #005e9e,#677d9f)"
    }
}
