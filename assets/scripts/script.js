function buscarArtista () {
    var nomeArtista = document.getElementById('artista').value
    console.log(nomeArtista)
    const url = `https://api.deezer.com/artist/name/${nomeArtista}`
    //const url = 'https://api.deezer.com/artist/27'
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data.name)
                //selecionar o elemento
            data.map((item) => {
                //criar o elemento
                
            })
        })

    
}