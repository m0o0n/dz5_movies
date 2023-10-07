import MoviesList from "components/MoviesList"

const Home = () => {
    return (

        <div className="home">
            <h2>Tranding Today</h2>
            <MoviesList url={'trending/movie/day'} />
        </div>
    )
}

export default Home