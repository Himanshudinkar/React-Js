import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Layout = () =>{

    return(
        <>
        <header className='head'>
            
            <nav>
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/flow">Flow</Link></li>
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