import MoviesList from "components/MoviesList"
import SearchForm from "components/SearchForm"
import { useEffect, useState } from "react"
import {  useSearchParams } from "react-router-dom"

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams({q: ''})
    const [query, setQuery] = useState('')
    const handleChangeQuery = ({target: {value}}) => {
        setQuery(value)
        console.log(value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchParams({q: query})
    }
    useEffect(()=>{
        setQuery(searchParams.get('q'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h2>Movies</h2>
            <SearchForm value={query} search={handleSearch} onChange={handleChangeQuery} />
            <MoviesList url={`search/movie?query=${searchParams.get('q')}`}/>
        </div>
    )
}

export default Movies