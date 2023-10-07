import LoadingHoc from "hoc/LoadingHoc"

const { fetchMovies } = require("api/movies")
const { useState } = require("react")
const { useEffect } = require("react")

const Cast = ({ id }) => {
    const [cast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchMovies(`movie/${id}/credits`).then(({ cast, crew }) => {
            setIsLoading(false)
            setCast(cast)
        })
    }, [id])
    return (
        <div>
            <LoadingHoc loading={isLoading}>
                {
                    cast.map(e => {
                        return (
                            <div key={e.id}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt={e.name} />
                                </div>
                                <span>● {e.name}</span>
                                <span>Character: {e.character}</span>
                            </div>
                        )
                    })
                }
            </LoadingHoc>
        </div>
    )
}

export default Cast