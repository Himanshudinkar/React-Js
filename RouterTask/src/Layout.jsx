import React from "react";
import {Link,Outlet} from "react-router-dom";

const Layout = () =>{
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">ABOUT</Link></li>
                    <li><Link to ="/blog">BLOG</Link></li>
                </ul>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <h1>Footer</h1>
        </footer>
        </>
    )
}

export default Layout