import { NavLink, useLocation, useParams } from "react-router-dom"

const AditionalInfo = () => {
    const location = useLocation()
    const { id } = useParams()
    return (
        <div>
            <h4>Aditional Information</h4>
            <ul>
                <li>
                    <NavLink to={`/movies/${id}/cast`} state={{ from: location.state.from }}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to={`/movies/${id}/reviews`} state={{ from: location.state.from }}>Reviews</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AditionalInfo