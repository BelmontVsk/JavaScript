function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inum')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
        
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=4) {
                // bebe  
                img.setAttribute('src','imagens/bebe h.png' )              
            } else if (idade <=12){
                // criança 
                img.setAttribute('src','imagens/Criança H.png' )
            } else if (idade <=18){
                // jovem
                img.setAttribute('src','imagens/jovem h.png' )
            } else if (idade <=50){
                // Adulto
                img.setAttribute('src','imagens/Adulto h.png' )
            } else{
                // idoso
                img.setAttribute('src','imagens/senhor.png' )
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=4) {
                // bebe  
                img.setAttribute('src','imagens/bebe m.png' )              
            } else if (idade <=12){
                // criança 
                img.setAttribute('src','imagens/Criança m.png' )
            } else if (idade <=18){
                // jovem
                img.setAttribute('src','imagens/jovem m.png' )
            } else if (idade <=50){
                // Adulto
                img.setAttribute('src','imagens/Adulto m.png' )
            } else{
                // idoso
                img.setAttribute('src','imagens/Senhora.png' )
            }
        }
        
        // res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
}