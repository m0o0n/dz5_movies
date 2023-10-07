import { fetchMovies } from "api/movies"
import LoadingHoc from "hoc/LoadingHoc"
import { useEffect, useState } from "react"
import { useLocation, NavLink } from "react-router-dom"

const MoviesList = ({ url }) => {
    const { pathname, search } = useLocation()
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchMovies(url).then(({ results }) => {
            setMovies(results)
            setIsLoading(false)
        })
    }, [url])
    return (
        <LoadingHoc loading={isLoading}>
            <ul>
                {movies.map((el) => (
                    <li key={el.id}>
                        <NavLink to={`/movies/${el.id}`} state={{ from: pathname + search }}>{el.original_name || el.original_title || el.name || el.title}</NavLink>
                    </li>
                ))}
            </ul>
        </LoadingHoc>



    )
}

export default MoviesList