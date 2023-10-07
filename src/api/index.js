import axios from "axios"

export const baseInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTAxMjVlZTdlODBhNDdiZmEzNTdjNzhkNTBkNmE4NCIsInN1YiI6IjY1MTk0YTVjOTNiZDY5MDEzOGZkZWZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GG23sbIpvcZ9eSp5bBjXCptHqpqOPMFJZzAEvsRp9mE',
        'accept': 'application/json'
}
})