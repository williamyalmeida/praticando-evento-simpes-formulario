function testando() {
    let texto = document.querySelector('input').value
    let divResultado = document.querySelector
    ('#resultado')
    let paragrafo = document.createElement('p')
    
    limpar() 

    paragrafo.innerHTML = `Nome: ${texto}`
    divResultado.appendChild(paragrafo)

    if(texto =='') {
        console.log(divResultado)

        divResultado.removeChild(paragrafo)
    }
    
}

function limpar() {
    let texto = document.querySelector('input')
    texto.value = ''
}
