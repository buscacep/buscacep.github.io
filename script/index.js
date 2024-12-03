document.getElementById('botao').addEventListener('click', async () => {

    let cep = document.getElementById('cep').value

    let token = '16464|kVUH1MbRoCVz5FgHrIsCed2pw9hs8bt5';

    let url = `https://api.invertexto.com/v1/cep/${cep}?token=${token}`;

    let api = await fetch(url, {
        method:'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })

    if(api.ok) {
        let resposta = await api.json()
        console.log(resposta)

        document.getElementById('cidade').innerText = resposta.city;
        document.getElementById('bairro').innerText = resposta.neighborhood;
        document.getElementById('rua').innerText = resposta.street;
        document.getElementById('uf').innerText = resposta.state

    }

})