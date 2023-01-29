

document.getElementById("movie-search-button").addEventListener("click", () => {
    const movieTitle = document.getElementById("movie-search").value;
    fetch(`http://www.omdbapi.com/?apikey=9b4ca8ec&t=[${movieTitle}]`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("movie-title").innerHTML = data.Title
        document.getElementById("movie-rating").innerHTML = `IMDB Rating: ${data.imdbRating}`
        document.getElementById("movie-plot").innerHTML = data.Plot;
        document.getElementById("movie-poster").src = data.Poster;
        console.log(data)
        if(data.imdbRating >= 8.5) {
            document.getElementById("movie-rating").style.color = "green"
        }
        else if(data.imdbRating >= 7.5) {
            document.getElementById("movie-rating").style.color = "purple"
        }
        else if(data.imdbRating >= 6.5) {
            document.getElementById("movie-rating").style.color = "orange"
        }
        else {
            document.getElementById("movie-rating").style.color = "red"
        }
        
    })
    
})

   
    
      
    
      
      
      
      
      