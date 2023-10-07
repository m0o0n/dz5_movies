import { fetchMovies } from 'api/movies'
import BackButton from 'components/BackButton'
import LoadingHoc from 'hoc/LoadingHoc'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import AditionalInfo from './AditionalInfo'
import Cast from './Cast'
import Review from './Review'
const MoviePage = () => {
    const {pathname} = useLocation()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [filmData, setFilmData] = useState({})
    const [filmGenres, setFilmGenres] = useState([])
    const [isShowCast, setIsShowCast] = useState(false)
    const [isShowReview, setIsShowReview] = useState(true)
    useEffect(() => {
        fetchMovies(`movie/${id}`).then((data) => {
            setFilmData(data)
            setFilmGenres(data.genres)
            console.log(data)
            setIsLoading(false)
        })
    }, [id])
    useEffect(() => {
        if (pathname === `/movies/${id}/cast`) {
            setIsShowCast(true)
            setIsShowReview(false)
        } else if (pathname === `/movies/${id}/reviews`) {
            setIsShowCast(false)
            setIsShowReview(true)
        } else {
            setIsShowCast(false)
            setIsShowReview(false)
        }
    }, [pathname, id])
    return (
        <LoadingHoc loading={isLoading}>
            <div>
                <BackButton />
                <div>
                    <div><img src={`https://image.tmdb.org/t/p/w500${filmData.backdrop_path}`} alt={filmData.title} /></div>
                    <div>
                        <div>
                            <h1>
                                {filmData.title} ( {(new Date(filmData.release_date)).getFullYear()} )
                            </h1>
                            <span>User Score: {Math.round(filmData.vote_average * 10)}%</span>
                        </div>
                        <div>
                            <h3>Overview</h3>
                            <span>{filmData.overview}</span>
                        </div>

                        <div>

                            <h3>Genres</h3>

                            <div>
                                {filmGenres.map(e => <span key={e.id}>{e.name} </span>)}
                            </div>


                        </div>
                    </div>
                </div>

                <AditionalInfo />

                {
                    isShowCast
                        ? <Cast id={id} />
                        : isShowReview
                            ? <Review id={id} />
                            : null
                }
            </div>
        </LoadingHoc>

    )
}

export default MoviePage