var horas = new Date
const horasAtual = horas.getHours()
var minutos = new Date
const minutosAtual = minutos.getMinutes()
const corpo = document.getElementById('corpo')
const imagens = document.getElementById('imagens')
const titulo = document.getElementById('h1')
const subtitulo = document.getElementById('h2')

function definirCorDeFundo(){
    if(horasAtual >= 6 && horasAtual <= 12){
        corpo.style.backgroundColor = '#F8E182'
        imagens.src = 'Imagens/manha.png'
        titulo.innerText = 'Manhã'
        subtitulo.innerText = (`${horasAtual}:${minutosAtual}`)
        
    }
    else if(horasAtual >= 13 && horasAtual <= 18){
        corpo.style.background = '#F5BA82'
        imagens.src = 'Imagens/tarde.png'
        titulo.innerText = 'Tarde'
        subtitulo.innerText = (`${horasAtual}:${minutosAtual}`)
    }
    else if(horasAtual >= 19 && horasAtual <= 5){
        corpo.style.background = '#193D4B'
        imagens.src = 'Imagens/noite.png'
        titulo.innerText = 'Noite'
        subtitulo.innerText = (`${horasAtual}:${minutosAtual}`)
    }
    else{
        corpo.style.background = '#193D4B'
        imagens.src = 'Imagens/noite.png'
        titulo.innerText = 'Noite'
        subtitulo.innerText = (`${horasAtual}:${minutosAtual}`)
    }
}
definirCorDeFundo();