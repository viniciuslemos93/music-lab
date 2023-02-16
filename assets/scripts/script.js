function buscarArtista () {
    var nomeArtista = document.getElementById('artista').value
    console.log(nomeArtista)
    const url = `https://api.deezer.com/artist/${nomeArtista}`
    //const url = 'https://api.deezer.com/artist/27'
    fetch(url)
        .then(function(response) {
            return response.json() })
        .then(function(data){
            console.log(data)
    
            createArtistInterface(data)
        })
}

function createArtistInterface (data) {
    const body = document.querySelector('body')

    for (let chave in data) {
        // A variável "chave" recebe o valor de cada uma das chaves do objeto em questão
        console.log('A chave atual é: ', chave)
        //Criando o elemento
        const div = document.createElement('div')
        div.textContent = `${chave}: ${data[chave]}`

        body.appendChild(div)
        
    }

}