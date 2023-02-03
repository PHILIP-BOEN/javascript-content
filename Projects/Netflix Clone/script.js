/* 
Create a fetchMovies() function that will make a dynamic API call to what you need 

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)


These are the 3 main functions and their URL'S you must create

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genre

These are all the DIV ID's you're gonna need access to 
========================================================
#1 CLASS = 'original__movies' = Div that holds Netflix Originals
#2 ID = 'trending' = Div that holds trending Movies
#3 ID = 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions when the page is loaded
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
}

// ** Helper function that makes dynamic API calls **
function fetchMovies(url, dom_element, path_type) {
    
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Error! Something Went Wrong");
        }
    }).then(data => {
        //console.log(data);
        showMovies(data, dom_element, path_type)
    }).catch(error => {
        console.log(error);
    })

}

// fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213', '.original__movies', 'poster_path')


//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {

    // Create a variable that grabs id or class
    let moviesEl = document.querySelector(dom_element);
    console.log(movies);
    // Loop through object
    for(let movie of movies.results){
        console.log(movie);

        // Within loop create an img element, set Attribute, set Source, append to the dom_element selected

        let imageElement = document.createElement('img');
        imageElement.setAttribute('data-id', movie.id)
        imageElement.src = `https://image.tmdb.org/t/p/original/${movie[path_type]}`;
        moviesEl.appendChild(imageElement);


    }

}


function getOriginals() {
    let url = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";

    fetchMovies(url, '.original__movies', 'poster_path');
}

function getTrendingNow() {
    let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';

    fetchMovies(url, '#trending', 'backdrop_path');
}

function getTopRated() {
    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

    fetchMovies(url, '#top_rated', 'backdrop_path');
}

// ** Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
    //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`

}

// ** Function that adds movie data to the DOM
const setTrailer = trailers => {
    // Set up iframe variable to hold id of the movieTrailer Element
    //const iframe
    // Set up variable to select .movieNotFound element
    //const movieNotFound

    // If there is a trailer add the src for it
    if (trailers.length > 0) {
        // add d-none class to movieNotFound and remove it from iframe

        // add youtube link with trailers key to iframe.src
    } else {
        // Else remove d-none class to movieNotfound and ADD it to iframe

    }
}