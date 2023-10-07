const LoadingHoc = ({loading, children}) => {
    return (
        loading ?  <p>Loading</p> : <>{children}</>
    )
}

export default LoadingHoc