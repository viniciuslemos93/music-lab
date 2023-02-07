function fetchApiData () {
    console.log('Chamando a função...')
    const url = 'https://api.deezer.com/user/2529'
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data)
        })
}