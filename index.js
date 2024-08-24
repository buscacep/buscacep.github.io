let botao = document.getElementById('botao')
botao.addEventListener('click', Api)

async function Api() {

    let cep, request, rua, bairro, cidade, estado, erro

    erro = document.getElementById('erro')
    cep = document.getElementById('cep').value
    request = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)

    estado = document.getElementById('estado')
    cidade = document.getElementById('cidade')
    rua = document.getElementById('rua')
    bairro = document.getElementById('bairro')

    if (request.ok) {
        let api = await request.json()

        erro.innerHTML = ''

        estado.innerHTML = api.state
        cidade.innerHTML = api.city
        rua.innerHTML = api.street
        bairro.innerHTML = api.neighborhood

        console.log(api)
    } else {

        estado.innerHTML = ''
        cidade.innerHTML = ''
        rua.innerHTML = ''
        bairro.innerHTML = ''

        erro.innerHTML = 'CEP Inválido!'
        console.log('erro')
    }

}