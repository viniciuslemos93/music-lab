function fetchApiData () {    
    const url = 'https://api.deezer.com/user/2529'
    fetch(url)    
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data)
                //selecionar o elemento
            data.map((item) => {
                //criar o elemento
            })
        })

    
}