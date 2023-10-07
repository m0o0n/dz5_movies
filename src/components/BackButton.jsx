import { useLocation, useNavigate } from "react-router-dom"

const BackButton = () => {
  const location = useLocation()
  const history = useNavigate()
    return (
        <button onClick={()=> history(location.state.from)}>
          &#x2190; Go back
        </button>
    )
}

export default BackButton