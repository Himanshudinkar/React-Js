import React from "react";
import { Link,Outlet } from "react-router-dom";

const Layout = () =>
{
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contect">Contect</Link></li>
            </ul>
        </nav>

       <main>
        <Outlet />
       </main>

       <footer>
        <h1>this is footer</h1>
       </footer>
        </>
    )
}

export default Layout