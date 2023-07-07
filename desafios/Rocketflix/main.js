import { API_KEY, language, IMG_URL } from "./api.js"

let randomID;
const apiURL = `https://api.themoviedb.org/3/movie/`

const movieImg = document.getElementById("movieImg")
const movieDesc = document.getElementById("movieDesc")
const movieTitle = document.getElementById("movieTitle")
const button = document.getElementById("button")

function getMovieData() {
    let randomID = Math.floor(Math.random() * 99999)
    axios.get(`${apiURL}${randomID}?${API_KEY}${language}`)
    .then(response => {
        const data = response.data
        let status_code = response.status
        

        movieTitle.innerText = data.title
        movieDesc.innerText = data.overview
        movieImg.src = `${IMG_URL}${data.poster_path}`
        // console.log(apiURL)
    })
    .catch(error => {
        console.log(error)
    })
}

button.addEventListener('click', getMovieData)


