import { baseInstance } from "api"

export const fetchMovies = async (url) => {
    const {data} = await baseInstance.get(url)
    return data
}