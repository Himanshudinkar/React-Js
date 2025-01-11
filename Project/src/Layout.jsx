import { Link, Outlet } from "react-router-dom";
import logo from './assets/logo.png'

const Layout = () =>{
    return(
        <>

        <header className="navs">
            <nav  className="navs1">
             <img src={logo} alt="" />
             <ul>
                <li><Link to="/" className="home"><span>Home</span></Link></li>
                <li><Link to="/signin" className="home">Login</Link></li>
                <li><Link to="/signup" className="home">Sign Up</Link></li>
             </ul>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
        
        <footer>

        </footer>
        </>
    )
}

export default Layout