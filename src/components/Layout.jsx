import {Outlet, NavLink} from 'react-router-dom'

export const Layout =()=>{
    return (
        <>
            <header>
                <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : ''} to='movies'>Movies</NavLink>
            </header>

            <main><Outlet /></main>

            <footer>

            </footer>
        </>
    )
}